import { MessageInteraction } from './interaction';
import { Channel, GuildMember } from './guild';
import { Role, User } from './user';
import { Application } from './application';

export enum MessageType {
  DEFAULT,
  RECIPIENT_ADD,
  RECIPIENT_REMOVE,
  CALL,
  CHANNEL_NAME_CHANGE,
  CHANNEL_ICON_CHANGE,
  CHANNEL_PINNED_MESSAGE,
  GUILD_MEMBER_JOIN,
  USER_PREMIUM_GUILD_SUBSCRIPTION,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3,
  CHANNEL_FOLLOW_ADD,
  GUILD_DISCOVERY_DISQUALIFIED,
  GUILD_DISCOVERY_REQUALIFIED,
  GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
  GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
  THREAD_CREATED,
  REPLY,
  APPLICATION_COMMAND,
  THREAD_STARTER_MESSAGE,
  GUILD_INVITE_REMINDER,
}

export type MessageActivity = {
  // https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure
};

export type Emoji = {
  id: string;
  name: string;
  roles?: Role[];
  user?: User;
  require_colons?: boolean;
  managed?: boolean;
  animated?: boolean;
  available?: boolean;
};

export type AllowedMentions = {
  parse: AllowedMentionType[];
  roles: string[];
  users: string[];
  replied_user: boolean;
};

export enum AllowedMentionType {
  Roles = 'roles',
  Users = 'users',
  Everyone = 'everyone',
}

export type Message = {
  id: string;
  channel_id: string;
  guild_id?: string;
  author: User;
  member?: GuildMember;
  content: string;
  timestamp: string;
  edited_timestamp: string;
  tts: boolean;
  mention_everyone: boolean;
  mentions: (User & { member: GuildMember })[];
  mention_roles: Role[];
  mention_channels?: ChannelMention[];
  attachments: Attachment[];
  embeds: Embed[];
  reactions?: Reaction[];
  nonce?: number | string;
  pinned: boolean;
  webhook_id?: string;
  type: MessageType;
  activity?: MessageActivity;
  application?: Application;
  application_id?: string;
  message_reference?: MessageReference;
  flags?: number;
  stickers?: MessageSticker;
  referenced_message?: Message;
  interaction?: MessageInteraction;
  thread?: Channel;
  components?: MessageComponent;
};

export type MessageEdit = Partial<{
  content: string;
  embeds: Embed[];
  // file: any;
  payload_json: string;
  allowed_mentions: AllowedMentions;
  attachments: Attachment[];
}>;

export type FollowUpMessage = {
  content: string;
  username?: string;
  avatar_url?: string;
  tts?: boolean;
  // file?: any;
  embeds?: Embed[];
  payload_json?: string;
  allowed_mentions?: AllowedMentions;
};

export enum MessageComponentType {
  ActionRow = 1,
  Button,
}

export type MessageComponent = {
  type: MessageComponentType;
  style?: ButtonStyle;
  label?: string;
  emoji?: Pick<Emoji, 'name' | 'id' | 'animated'>;
  custom_id?: string;
  url?: string;
  disabled?: boolean;
};

export enum ButtonStyle {
  Primary = 1,
  Secondary,
  Success,
  Danger,
  Link,
}

export type MessageReference = {
  message_id?: string;
  channel_id?: string;
  guild_id?: string;
  fail_if_not_exists?: boolean;
};

export type MessageSticker = {
  // https://discord.com/developers/docs/resources/channel#message-object-message-sticker-structure
};

export type ChannelMention = {
  id: string;
  guild_id: string;
  type: number;
  name: string;
};

export type Attachment = {
  id: string;
  filename: string;
  content_type?: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
};

export type Embed = {
  title?: string;
  type?: string;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  // ... and several other omitted fields
  // https://discord.com/developers/docs/resources/channel#embed-object
};

export type Reaction = {
  count: number;
  me: boolean;
  emoji: Emoji;
};
