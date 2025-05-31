import { APIRoute, AuthorizationStatus, RequestStatus, } from '../const/api-const';
import { Values } from './common-types';

export type APIRouteType = Values<typeof APIRoute>;

export type RequestStatusType = Values<typeof RequestStatus>;

export type AuthorizationStatusType = Values<typeof AuthorizationStatus>;
