/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#display_name NotificationDestination#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#id NotificationDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#config NotificationDestination#config}
  */
  readonly config?: NotificationDestinationConfigA;
}
export interface NotificationDestinationConfigEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#addresses NotificationDestination#addresses}
  */
  readonly addresses?: string[];
}

export function notificationDestinationConfigEmailToTerraform(struct?: NotificationDestinationConfigEmailOutputReference | NotificationDestinationConfigEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
  }
}


export function notificationDestinationConfigEmailToHclTerraform(struct?: NotificationDestinationConfigEmailOutputReference | NotificationDestinationConfigEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationDestinationConfigEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationDestinationConfigEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationDestinationConfigEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addresses = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addresses = value.addresses;
    }
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }
}
export interface NotificationDestinationConfigGenericWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#password NotificationDestination#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#password_set NotificationDestination#password_set}
  */
  readonly passwordSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#url NotificationDestination#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}
  */
  readonly urlSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#username NotificationDestination#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#username_set NotificationDestination#username_set}
  */
  readonly usernameSet?: boolean | cdktf.IResolvable;
}

export function notificationDestinationConfigGenericWebhookToTerraform(struct?: NotificationDestinationConfigGenericWebhookOutputReference | NotificationDestinationConfigGenericWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    password_set: cdktf.booleanToTerraform(struct!.passwordSet),
    url: cdktf.stringToTerraform(struct!.url),
    url_set: cdktf.booleanToTerraform(struct!.urlSet),
    username: cdktf.stringToTerraform(struct!.username),
    username_set: cdktf.booleanToTerraform(struct!.usernameSet),
  }
}


export function notificationDestinationConfigGenericWebhookToHclTerraform(struct?: NotificationDestinationConfigGenericWebhookOutputReference | NotificationDestinationConfigGenericWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_set: {
      value: cdktf.booleanToHclTerraform(struct!.passwordSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_set: {
      value: cdktf.booleanToHclTerraform(struct!.urlSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_set: {
      value: cdktf.booleanToHclTerraform(struct!.usernameSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationDestinationConfigGenericWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationDestinationConfigGenericWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSet = this._passwordSet;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._urlSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlSet = this._urlSet;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameSet = this._usernameSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationDestinationConfigGenericWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._passwordSet = undefined;
      this._url = undefined;
      this._urlSet = undefined;
      this._username = undefined;
      this._usernameSet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._passwordSet = value.passwordSet;
      this._url = value.url;
      this._urlSet = value.urlSet;
      this._username = value.username;
      this._usernameSet = value.usernameSet;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_set - computed: true, optional: true, required: false
  private _passwordSet?: boolean | cdktf.IResolvable; 
  public get passwordSet() {
    return this.getBooleanAttribute('password_set');
  }
  public set passwordSet(value: boolean | cdktf.IResolvable) {
    this._passwordSet = value;
  }
  public resetPasswordSet() {
    this._passwordSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSetInput() {
    return this._passwordSet;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_set - computed: true, optional: true, required: false
  private _urlSet?: boolean | cdktf.IResolvable; 
  public get urlSet() {
    return this.getBooleanAttribute('url_set');
  }
  public set urlSet(value: boolean | cdktf.IResolvable) {
    this._urlSet = value;
  }
  public resetUrlSet() {
    this._urlSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSetInput() {
    return this._urlSet;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_set - computed: true, optional: true, required: false
  private _usernameSet?: boolean | cdktf.IResolvable; 
  public get usernameSet() {
    return this.getBooleanAttribute('username_set');
  }
  public set usernameSet(value: boolean | cdktf.IResolvable) {
    this._usernameSet = value;
  }
  public resetUsernameSet() {
    this._usernameSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameSetInput() {
    return this._usernameSet;
  }
}
export interface NotificationDestinationConfigMicrosoftTeams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#app_id NotificationDestination#app_id}
  */
  readonly appId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#app_id_set NotificationDestination#app_id_set}
  */
  readonly appIdSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#auth_secret NotificationDestination#auth_secret}
  */
  readonly authSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#auth_secret_set NotificationDestination#auth_secret_set}
  */
  readonly authSecretSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#channel_url NotificationDestination#channel_url}
  */
  readonly channelUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#channel_url_set NotificationDestination#channel_url_set}
  */
  readonly channelUrlSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#tenant_id NotificationDestination#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#tenant_id_set NotificationDestination#tenant_id_set}
  */
  readonly tenantIdSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#url NotificationDestination#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}
  */
  readonly urlSet?: boolean | cdktf.IResolvable;
}

export function notificationDestinationConfigMicrosoftTeamsToTerraform(struct?: NotificationDestinationConfigMicrosoftTeamsOutputReference | NotificationDestinationConfigMicrosoftTeams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_id_set: cdktf.booleanToTerraform(struct!.appIdSet),
    auth_secret: cdktf.stringToTerraform(struct!.authSecret),
    auth_secret_set: cdktf.booleanToTerraform(struct!.authSecretSet),
    channel_url: cdktf.stringToTerraform(struct!.channelUrl),
    channel_url_set: cdktf.booleanToTerraform(struct!.channelUrlSet),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    tenant_id_set: cdktf.booleanToTerraform(struct!.tenantIdSet),
    url: cdktf.stringToTerraform(struct!.url),
    url_set: cdktf.booleanToTerraform(struct!.urlSet),
  }
}


export function notificationDestinationConfigMicrosoftTeamsToHclTerraform(struct?: NotificationDestinationConfigMicrosoftTeamsOutputReference | NotificationDestinationConfigMicrosoftTeams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_id_set: {
      value: cdktf.booleanToHclTerraform(struct!.appIdSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_secret: {
      value: cdktf.stringToHclTerraform(struct!.authSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_secret_set: {
      value: cdktf.booleanToHclTerraform(struct!.authSecretSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel_url: {
      value: cdktf.stringToHclTerraform(struct!.channelUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_url_set: {
      value: cdktf.booleanToHclTerraform(struct!.channelUrlSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id_set: {
      value: cdktf.booleanToHclTerraform(struct!.tenantIdSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_set: {
      value: cdktf.booleanToHclTerraform(struct!.urlSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationDestinationConfigMicrosoftTeamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationDestinationConfigMicrosoftTeams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appIdSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIdSet = this._appIdSet;
    }
    if (this._authSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSecret = this._authSecret;
    }
    if (this._authSecretSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSecretSet = this._authSecretSet;
    }
    if (this._channelUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelUrl = this._channelUrl;
    }
    if (this._channelUrlSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelUrlSet = this._channelUrlSet;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._tenantIdSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantIdSet = this._tenantIdSet;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._urlSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlSet = this._urlSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationDestinationConfigMicrosoftTeams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._appIdSet = undefined;
      this._authSecret = undefined;
      this._authSecretSet = undefined;
      this._channelUrl = undefined;
      this._channelUrlSet = undefined;
      this._tenantId = undefined;
      this._tenantIdSet = undefined;
      this._url = undefined;
      this._urlSet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._appIdSet = value.appIdSet;
      this._authSecret = value.authSecret;
      this._authSecretSet = value.authSecretSet;
      this._channelUrl = value.channelUrl;
      this._channelUrlSet = value.channelUrlSet;
      this._tenantId = value.tenantId;
      this._tenantIdSet = value.tenantIdSet;
      this._url = value.url;
      this._urlSet = value.urlSet;
    }
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_id_set - computed: false, optional: true, required: false
  private _appIdSet?: boolean | cdktf.IResolvable; 
  public get appIdSet() {
    return this.getBooleanAttribute('app_id_set');
  }
  public set appIdSet(value: boolean | cdktf.IResolvable) {
    this._appIdSet = value;
  }
  public resetAppIdSet() {
    this._appIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdSetInput() {
    return this._appIdSet;
  }

  // auth_secret - computed: false, optional: true, required: false
  private _authSecret?: string; 
  public get authSecret() {
    return this.getStringAttribute('auth_secret');
  }
  public set authSecret(value: string) {
    this._authSecret = value;
  }
  public resetAuthSecret() {
    this._authSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSecretInput() {
    return this._authSecret;
  }

  // auth_secret_set - computed: false, optional: true, required: false
  private _authSecretSet?: boolean | cdktf.IResolvable; 
  public get authSecretSet() {
    return this.getBooleanAttribute('auth_secret_set');
  }
  public set authSecretSet(value: boolean | cdktf.IResolvable) {
    this._authSecretSet = value;
  }
  public resetAuthSecretSet() {
    this._authSecretSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSecretSetInput() {
    return this._authSecretSet;
  }

  // channel_url - computed: false, optional: true, required: false
  private _channelUrl?: string; 
  public get channelUrl() {
    return this.getStringAttribute('channel_url');
  }
  public set channelUrl(value: string) {
    this._channelUrl = value;
  }
  public resetChannelUrl() {
    this._channelUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelUrlInput() {
    return this._channelUrl;
  }

  // channel_url_set - computed: false, optional: true, required: false
  private _channelUrlSet?: boolean | cdktf.IResolvable; 
  public get channelUrlSet() {
    return this.getBooleanAttribute('channel_url_set');
  }
  public set channelUrlSet(value: boolean | cdktf.IResolvable) {
    this._channelUrlSet = value;
  }
  public resetChannelUrlSet() {
    this._channelUrlSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelUrlSetInput() {
    return this._channelUrlSet;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tenant_id_set - computed: false, optional: true, required: false
  private _tenantIdSet?: boolean | cdktf.IResolvable; 
  public get tenantIdSet() {
    return this.getBooleanAttribute('tenant_id_set');
  }
  public set tenantIdSet(value: boolean | cdktf.IResolvable) {
    this._tenantIdSet = value;
  }
  public resetTenantIdSet() {
    this._tenantIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdSetInput() {
    return this._tenantIdSet;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_set - computed: true, optional: true, required: false
  private _urlSet?: boolean | cdktf.IResolvable; 
  public get urlSet() {
    return this.getBooleanAttribute('url_set');
  }
  public set urlSet(value: boolean | cdktf.IResolvable) {
    this._urlSet = value;
  }
  public resetUrlSet() {
    this._urlSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSetInput() {
    return this._urlSet;
  }
}
export interface NotificationDestinationConfigPagerduty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#integration_key NotificationDestination#integration_key}
  */
  readonly integrationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#integration_key_set NotificationDestination#integration_key_set}
  */
  readonly integrationKeySet?: boolean | cdktf.IResolvable;
}

export function notificationDestinationConfigPagerdutyToTerraform(struct?: NotificationDestinationConfigPagerdutyOutputReference | NotificationDestinationConfigPagerduty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_key: cdktf.stringToTerraform(struct!.integrationKey),
    integration_key_set: cdktf.booleanToTerraform(struct!.integrationKeySet),
  }
}


export function notificationDestinationConfigPagerdutyToHclTerraform(struct?: NotificationDestinationConfigPagerdutyOutputReference | NotificationDestinationConfigPagerduty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_key: {
      value: cdktf.stringToHclTerraform(struct!.integrationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_key_set: {
      value: cdktf.booleanToHclTerraform(struct!.integrationKeySet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationDestinationConfigPagerdutyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationDestinationConfigPagerduty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationKey = this._integrationKey;
    }
    if (this._integrationKeySet !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationKeySet = this._integrationKeySet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationDestinationConfigPagerduty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._integrationKey = undefined;
      this._integrationKeySet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._integrationKey = value.integrationKey;
      this._integrationKeySet = value.integrationKeySet;
    }
  }

  // integration_key - computed: false, optional: true, required: false
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  public resetIntegrationKey() {
    this._integrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // integration_key_set - computed: true, optional: true, required: false
  private _integrationKeySet?: boolean | cdktf.IResolvable; 
  public get integrationKeySet() {
    return this.getBooleanAttribute('integration_key_set');
  }
  public set integrationKeySet(value: boolean | cdktf.IResolvable) {
    this._integrationKeySet = value;
  }
  public resetIntegrationKeySet() {
    this._integrationKeySet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeySetInput() {
    return this._integrationKeySet;
  }
}
export interface NotificationDestinationConfigSlack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#channel_id NotificationDestination#channel_id}
  */
  readonly channelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#channel_id_set NotificationDestination#channel_id_set}
  */
  readonly channelIdSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#oauth_token NotificationDestination#oauth_token}
  */
  readonly oauthToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#oauth_token_set NotificationDestination#oauth_token_set}
  */
  readonly oauthTokenSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#url NotificationDestination#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}
  */
  readonly urlSet?: boolean | cdktf.IResolvable;
}

export function notificationDestinationConfigSlackToTerraform(struct?: NotificationDestinationConfigSlackOutputReference | NotificationDestinationConfigSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    channel_id_set: cdktf.booleanToTerraform(struct!.channelIdSet),
    oauth_token: cdktf.stringToTerraform(struct!.oauthToken),
    oauth_token_set: cdktf.booleanToTerraform(struct!.oauthTokenSet),
    url: cdktf.stringToTerraform(struct!.url),
    url_set: cdktf.booleanToTerraform(struct!.urlSet),
  }
}


export function notificationDestinationConfigSlackToHclTerraform(struct?: NotificationDestinationConfigSlackOutputReference | NotificationDestinationConfigSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_id: {
      value: cdktf.stringToHclTerraform(struct!.channelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_id_set: {
      value: cdktf.booleanToHclTerraform(struct!.channelIdSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oauth_token: {
      value: cdktf.stringToHclTerraform(struct!.oauthToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_token_set: {
      value: cdktf.booleanToHclTerraform(struct!.oauthTokenSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_set: {
      value: cdktf.booleanToHclTerraform(struct!.urlSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationDestinationConfigSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationDestinationConfigSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._channelIdSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelIdSet = this._channelIdSet;
    }
    if (this._oauthToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthToken = this._oauthToken;
    }
    if (this._oauthTokenSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthTokenSet = this._oauthTokenSet;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._urlSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlSet = this._urlSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationDestinationConfigSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channelId = undefined;
      this._channelIdSet = undefined;
      this._oauthToken = undefined;
      this._oauthTokenSet = undefined;
      this._url = undefined;
      this._urlSet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channelId = value.channelId;
      this._channelIdSet = value.channelIdSet;
      this._oauthToken = value.oauthToken;
      this._oauthTokenSet = value.oauthTokenSet;
      this._url = value.url;
      this._urlSet = value.urlSet;
    }
  }

  // channel_id - computed: false, optional: true, required: false
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  public resetChannelId() {
    this._channelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // channel_id_set - computed: true, optional: true, required: false
  private _channelIdSet?: boolean | cdktf.IResolvable; 
  public get channelIdSet() {
    return this.getBooleanAttribute('channel_id_set');
  }
  public set channelIdSet(value: boolean | cdktf.IResolvable) {
    this._channelIdSet = value;
  }
  public resetChannelIdSet() {
    this._channelIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdSetInput() {
    return this._channelIdSet;
  }

  // oauth_token - computed: false, optional: true, required: false
  private _oauthToken?: string; 
  public get oauthToken() {
    return this.getStringAttribute('oauth_token');
  }
  public set oauthToken(value: string) {
    this._oauthToken = value;
  }
  public resetOauthToken() {
    this._oauthToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenInput() {
    return this._oauthToken;
  }

  // oauth_token_set - computed: true, optional: true, required: false
  private _oauthTokenSet?: boolean | cdktf.IResolvable; 
  public get oauthTokenSet() {
    return this.getBooleanAttribute('oauth_token_set');
  }
  public set oauthTokenSet(value: boolean | cdktf.IResolvable) {
    this._oauthTokenSet = value;
  }
  public resetOauthTokenSet() {
    this._oauthTokenSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenSetInput() {
    return this._oauthTokenSet;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_set - computed: true, optional: true, required: false
  private _urlSet?: boolean | cdktf.IResolvable; 
  public get urlSet() {
    return this.getBooleanAttribute('url_set');
  }
  public set urlSet(value: boolean | cdktf.IResolvable) {
    this._urlSet = value;
  }
  public resetUrlSet() {
    this._urlSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSetInput() {
    return this._urlSet;
  }
}
export interface NotificationDestinationConfigA {
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#email NotificationDestination#email}
  */
  readonly email?: NotificationDestinationConfigEmail;
  /**
  * generic_webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#generic_webhook NotificationDestination#generic_webhook}
  */
  readonly genericWebhook?: NotificationDestinationConfigGenericWebhook;
  /**
  * microsoft_teams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#microsoft_teams NotificationDestination#microsoft_teams}
  */
  readonly microsoftTeams?: NotificationDestinationConfigMicrosoftTeams;
  /**
  * pagerduty block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#pagerduty NotificationDestination#pagerduty}
  */
  readonly pagerduty?: NotificationDestinationConfigPagerduty;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#slack NotificationDestination#slack}
  */
  readonly slack?: NotificationDestinationConfigSlack;
}

export function notificationDestinationConfigAToTerraform(struct?: NotificationDestinationConfigAOutputReference | NotificationDestinationConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: notificationDestinationConfigEmailToTerraform(struct!.email),
    generic_webhook: notificationDestinationConfigGenericWebhookToTerraform(struct!.genericWebhook),
    microsoft_teams: notificationDestinationConfigMicrosoftTeamsToTerraform(struct!.microsoftTeams),
    pagerduty: notificationDestinationConfigPagerdutyToTerraform(struct!.pagerduty),
    slack: notificationDestinationConfigSlackToTerraform(struct!.slack),
  }
}


export function notificationDestinationConfigAToHclTerraform(struct?: NotificationDestinationConfigAOutputReference | NotificationDestinationConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: notificationDestinationConfigEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationDestinationConfigEmailList",
    },
    generic_webhook: {
      value: notificationDestinationConfigGenericWebhookToHclTerraform(struct!.genericWebhook),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationDestinationConfigGenericWebhookList",
    },
    microsoft_teams: {
      value: notificationDestinationConfigMicrosoftTeamsToHclTerraform(struct!.microsoftTeams),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationDestinationConfigMicrosoftTeamsList",
    },
    pagerduty: {
      value: notificationDestinationConfigPagerdutyToHclTerraform(struct!.pagerduty),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationDestinationConfigPagerdutyList",
    },
    slack: {
      value: notificationDestinationConfigSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationDestinationConfigSlackList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationDestinationConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationDestinationConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._genericWebhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericWebhook = this._genericWebhook?.internalValue;
    }
    if (this._microsoftTeams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftTeams = this._microsoftTeams?.internalValue;
    }
    if (this._pagerduty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerduty = this._pagerduty?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationDestinationConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email.internalValue = undefined;
      this._genericWebhook.internalValue = undefined;
      this._microsoftTeams.internalValue = undefined;
      this._pagerduty.internalValue = undefined;
      this._slack.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email.internalValue = value.email;
      this._genericWebhook.internalValue = value.genericWebhook;
      this._microsoftTeams.internalValue = value.microsoftTeams;
      this._pagerduty.internalValue = value.pagerduty;
      this._slack.internalValue = value.slack;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email = new NotificationDestinationConfigEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: NotificationDestinationConfigEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // generic_webhook - computed: false, optional: true, required: false
  private _genericWebhook = new NotificationDestinationConfigGenericWebhookOutputReference(this, "generic_webhook");
  public get genericWebhook() {
    return this._genericWebhook;
  }
  public putGenericWebhook(value: NotificationDestinationConfigGenericWebhook) {
    this._genericWebhook.internalValue = value;
  }
  public resetGenericWebhook() {
    this._genericWebhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericWebhookInput() {
    return this._genericWebhook.internalValue;
  }

  // microsoft_teams - computed: false, optional: true, required: false
  private _microsoftTeams = new NotificationDestinationConfigMicrosoftTeamsOutputReference(this, "microsoft_teams");
  public get microsoftTeams() {
    return this._microsoftTeams;
  }
  public putMicrosoftTeams(value: NotificationDestinationConfigMicrosoftTeams) {
    this._microsoftTeams.internalValue = value;
  }
  public resetMicrosoftTeams() {
    this._microsoftTeams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftTeamsInput() {
    return this._microsoftTeams.internalValue;
  }

  // pagerduty - computed: false, optional: true, required: false
  private _pagerduty = new NotificationDestinationConfigPagerdutyOutputReference(this, "pagerduty");
  public get pagerduty() {
    return this._pagerduty;
  }
  public putPagerduty(value: NotificationDestinationConfigPagerduty) {
    this._pagerduty.internalValue = value;
  }
  public resetPagerduty() {
    this._pagerduty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyInput() {
    return this._pagerduty.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new NotificationDestinationConfigSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: NotificationDestinationConfigSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination databricks_notification_destination}
*/
export class NotificationDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_notification_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationDestination to import
  * @param importFromId The id of the existing NotificationDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_notification_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/notification_destination databricks_notification_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_notification_destination',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.94.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationType = config.destinationType;
    this._displayName = config.displayName;
    this._id = config.id;
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_type - computed: true, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // config - computed: false, optional: true, required: false
  private _config = new NotificationDestinationConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: NotificationDestinationConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_type: cdktf.stringToTerraform(this._destinationType),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      config: notificationDestinationConfigAToTerraform(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_type: {
        value: cdktf.stringToHclTerraform(this._destinationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: notificationDestinationConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationDestinationConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
