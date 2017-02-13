import * as _ from 'lodash';

import { dbThreads } from '../db-data';
import { Thread } from '../../../shared/model/thread';

export function findThreadById(threadId: number) {

  const threads: Thread[] = <any>_.values(dbThreads);

  return _.find(threads, thread => thread.id === threadId);
}
