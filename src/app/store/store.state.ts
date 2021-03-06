import { Thread } from '../../../shared/model/thread';
import { Message } from '../../../shared/model/message';
import { Participant } from '../../../shared/model/participant';

export interface StoreState {
  participants: {[key: number]: Participant};
  messages: {[key: number]: Message};
  threads: {[key: number]: Thread};
}

export const INITIAL_STORE_STATE: StoreState = {
  participants: {},
  messages: {},
  threads: {}
};
