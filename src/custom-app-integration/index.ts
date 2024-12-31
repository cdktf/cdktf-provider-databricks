/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomAppIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}
  */
  readonly confidential?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}
  */
  readonly createTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}
  */
  readonly createdBy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}
  */
  readonly creatorUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#id CustomAppIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#name CustomAppIntegration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}
  */
  readonly redirectUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}
  */
  readonly scopes?: string[];
  /**
  * token_access_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#token_access_policy CustomAppIntegration#token_access_policy}
  */
  readonly tokenAccessPolicy?: CustomAppIntegrationTokenAccessPolicy;
}
export interface CustomAppIntegrationTokenAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#access_token_ttl_in_minutes CustomAppIntegration#access_token_ttl_in_minutes}
  */
  readonly accessTokenTtlInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#refresh_token_ttl_in_minutes CustomAppIntegration#refresh_token_ttl_in_minutes}
  */
  readonly refreshTokenTtlInMinutes?: number;
}

export function customAppIntegrationTokenAccessPolicyToTerraform(struct?: CustomAppIntegrationTokenAccessPolicyOutputReference | CustomAppIntegrationTokenAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_ttl_in_minutes: cdktf.numberToTerraform(struct!.accessTokenTtlInMinutes),
    refresh_token_ttl_in_minutes: cdktf.numberToTerraform(struct!.refreshTokenTtlInMinutes),
  }
}


export function customAppIntegrationTokenAccessPolicyToHclTerraform(struct?: CustomAppIntegrationTokenAccessPolicyOutputReference | CustomAppIntegrationTokenAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_ttl_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.accessTokenTtlInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_token_ttl_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.refreshTokenTtlInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppIntegrationTokenAccessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppIntegrationTokenAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenTtlInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenTtlInMinutes = this._accessTokenTtlInMinutes;
    }
    if (this._refreshTokenTtlInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenTtlInMinutes = this._refreshTokenTtlInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppIntegrationTokenAccessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessTokenTtlInMinutes = undefined;
      this._refreshTokenTtlInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessTokenTtlInMinutes = value.accessTokenTtlInMinutes;
      this._refreshTokenTtlInMinutes = value.refreshTokenTtlInMinutes;
    }
  }

  // access_token_ttl_in_minutes - computed: false, optional: true, required: false
  private _accessTokenTtlInMinutes?: number; 
  public get accessTokenTtlInMinutes() {
    return this.getNumberAttribute('access_token_ttl_in_minutes');
  }
  public set accessTokenTtlInMinutes(value: number) {
    this._accessTokenTtlInMinutes = value;
  }
  public resetAccessTokenTtlInMinutes() {
    this._accessTokenTtlInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenTtlInMinutesInput() {
    return this._accessTokenTtlInMinutes;
  }

  // refresh_token_ttl_in_minutes - computed: false, optional: true, required: false
  private _refreshTokenTtlInMinutes?: number; 
  public get refreshTokenTtlInMinutes() {
    return this.getNumberAttribute('refresh_token_ttl_in_minutes');
  }
  public set refreshTokenTtlInMinutes(value: number) {
    this._refreshTokenTtlInMinutes = value;
  }
  public resetRefreshTokenTtlInMinutes() {
    this._refreshTokenTtlInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenTtlInMinutesInput() {
    return this._refreshTokenTtlInMinutes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration databricks_custom_app_integration}
*/
export class CustomAppIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_custom_app_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomAppIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomAppIntegration to import
  * @param importFromId The id of the existing CustomAppIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomAppIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_custom_app_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/custom_app_integration databricks_custom_app_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomAppIntegrationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CustomAppIntegrationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_custom_app_integration',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.62.1',
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
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._confidential = config.confidential;
    this._createTime = config.createTime;
    this._createdBy = config.createdBy;
    this._creatorUsername = config.creatorUsername;
    this._id = config.id;
    this._integrationId = config.integrationId;
    this._name = config.name;
    this._redirectUrls = config.redirectUrls;
    this._scopes = config.scopes;
    this._tokenAccessPolicy.internalValue = config.tokenAccessPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // confidential - computed: false, optional: true, required: false
  private _confidential?: boolean | cdktf.IResolvable; 
  public get confidential() {
    return this.getBooleanAttribute('confidential');
  }
  public set confidential(value: boolean | cdktf.IResolvable) {
    this._confidential = value;
  }
  public resetConfidential() {
    this._confidential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInput() {
    return this._confidential;
  }

  // create_time - computed: true, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: number; 
  public get createdBy() {
    return this.getNumberAttribute('created_by');
  }
  public set createdBy(value: number) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // creator_username - computed: true, optional: true, required: false
  private _creatorUsername?: string; 
  public get creatorUsername() {
    return this.getStringAttribute('creator_username');
  }
  public set creatorUsername(value: string) {
    this._creatorUsername = value;
  }
  public resetCreatorUsername() {
    this._creatorUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorUsernameInput() {
    return this._creatorUsername;
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

  // integration_id - computed: true, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // redirect_urls - computed: false, optional: true, required: false
  private _redirectUrls?: string[]; 
  public get redirectUrls() {
    return this.getListAttribute('redirect_urls');
  }
  public set redirectUrls(value: string[]) {
    this._redirectUrls = value;
  }
  public resetRedirectUrls() {
    this._redirectUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlsInput() {
    return this._redirectUrls;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_access_policy - computed: false, optional: true, required: false
  private _tokenAccessPolicy = new CustomAppIntegrationTokenAccessPolicyOutputReference(this, "token_access_policy");
  public get tokenAccessPolicy() {
    return this._tokenAccessPolicy;
  }
  public putTokenAccessPolicy(value: CustomAppIntegrationTokenAccessPolicy) {
    this._tokenAccessPolicy.internalValue = value;
  }
  public resetTokenAccessPolicy() {
    this._tokenAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAccessPolicyInput() {
    return this._tokenAccessPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      confidential: cdktf.booleanToTerraform(this._confidential),
      create_time: cdktf.stringToTerraform(this._createTime),
      created_by: cdktf.numberToTerraform(this._createdBy),
      creator_username: cdktf.stringToTerraform(this._creatorUsername),
      id: cdktf.stringToTerraform(this._id),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      name: cdktf.stringToTerraform(this._name),
      redirect_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectUrls),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      token_access_policy: customAppIntegrationTokenAccessPolicyToTerraform(this._tokenAccessPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confidential: {
        value: cdktf.booleanToHclTerraform(this._confidential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.numberToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      creator_username: {
        value: cdktf.stringToHclTerraform(this._creatorUsername),
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
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirectUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      token_access_policy: {
        value: customAppIntegrationTokenAccessPolicyToHclTerraform(this._tokenAccessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomAppIntegrationTokenAccessPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
