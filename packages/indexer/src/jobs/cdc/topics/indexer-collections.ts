/* eslint-disable @typescript-eslint/no-explicit-any */
import { KafkaEventHandler } from "./KafkaEventHandler";
import { redis } from "@/common/redis";

import { logger } from "@/common/logger";
import {
  WebsocketEventKind,
  WebsocketEventRouter,
} from "@/jobs/websocket-events/websocket-event-router";

export class IndexerCollectionsHandler extends KafkaEventHandler {
  topicName = "indexer.public.collections";

  protected async handleInsert(payload: any): Promise<void> {
    if (!payload.after) {
      return;
    }

    await WebsocketEventRouter({
      eventInfo: {
        before: payload.before,
        after: payload.after,
        trigger: "insert",
      },
      eventKind: WebsocketEventKind.CollectionEvent,
    });
  }

  protected async handleUpdate(payload: any): Promise<void> {
    if (!payload.after) {
      return;
    }

    await WebsocketEventRouter({
      eventInfo: {
        before: payload.before,
        after: payload.after,
        trigger: "update",
      },
      eventKind: WebsocketEventKind.CollectionEvent,
    });
    logger.info("top-selling-collections", `updating collection ${payload.after.id}`);

    await redis.set(`collection-cache:v1:${payload.after.id}`, JSON.stringify(payload.after), "XX");

    logger.info("top-selling-collections", `updated collection ${payload.after.id}`);
  }

  protected async handleDelete(): Promise<void> {
    // probably do nothing here
  }
}
