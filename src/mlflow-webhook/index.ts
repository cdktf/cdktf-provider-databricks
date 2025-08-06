/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MlflowWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}
  */
  readonly modelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}
  */
  readonly status?: string;
  /**
  * http_url_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#http_url_spec MlflowWebhook#http_url_spec}
  */
  readonly httpUrlSpec?: MlflowWebhookHttpUrlSpec;
  /**
  * job_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#job_spec MlflowWebhook#job_spec}
  */
  readonly jobSpec?: MlflowWebhookJobSpec;
}
export interface MlflowWebhookHttpUrlSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#authorization MlflowWebhook#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#enable_ssl_verification MlflowWebhook#enable_ssl_verification}
  */
  readonly enableSslVerification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#secret MlflowWebhook#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#url MlflowWebhook#url}
  */
  readonly url: string;
}

export function mlflowWebhookHttpUrlSpecToTerraform(struct?: MlflowWebhookHttpUrlSpecOutputReference | MlflowWebhookHttpUrlSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: cdktf.stringToTerraform(struct!.authorization),
    enable_ssl_verification: cdktf.booleanToTerraform(struct!.enableSslVerification),
    secret: cdktf.stringToTerraform(struct!.secret),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mlflowWebhookHttpUrlSpecToHclTerraform(struct?: MlflowWebhookHttpUrlSpecOutputReference | MlflowWebhookHttpUrlSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: cdktf.stringToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ssl_verification: {
      value: cdktf.booleanToHclTerraform(struct!.enableSslVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MlflowWebhookHttpUrlSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MlflowWebhookHttpUrlSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    if (this._enableSslVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSslVerification = this._enableSslVerification;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlflowWebhookHttpUrlSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorization = undefined;
      this._enableSslVerification = undefined;
      this._secret = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorization = value.authorization;
      this._enableSslVerification = value.enableSslVerification;
      this._secret = value.secret;
      this._url = value.url;
    }
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // enable_ssl_verification - computed: false, optional: true, required: false
  private _enableSslVerification?: boolean | cdktf.IResolvable; 
  public get enableSslVerification() {
    return this.getBooleanAttribute('enable_ssl_verification');
  }
  public set enableSslVerification(value: boolean | cdktf.IResolvable) {
    this._enableSslVerification = value;
  }
  public resetEnableSslVerification() {
    this._enableSslVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslVerificationInput() {
    return this._enableSslVerification;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MlflowWebhookJobSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#access_token MlflowWebhook#access_token}
  */
  readonly accessToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#job_id MlflowWebhook#job_id}
  */
  readonly jobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#workspace_url MlflowWebhook#workspace_url}
  */
  readonly workspaceUrl?: string;
}

export function mlflowWebhookJobSpecToTerraform(struct?: MlflowWebhookJobSpecOutputReference | MlflowWebhookJobSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    job_id: cdktf.stringToTerraform(struct!.jobId),
    workspace_url: cdktf.stringToTerraform(struct!.workspaceUrl),
  }
}


export function mlflowWebhookJobSpecToHclTerraform(struct?: MlflowWebhookJobSpecOutputReference | MlflowWebhookJobSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_id: {
      value: cdktf.stringToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_url: {
      value: cdktf.stringToHclTerraform(struct!.workspaceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MlflowWebhookJobSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MlflowWebhookJobSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._workspaceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceUrl = this._workspaceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlflowWebhookJobSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._jobId = undefined;
      this._workspaceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._jobId = value.jobId;
      this._workspaceUrl = value.workspaceUrl;
    }
  }

  // access_token - computed: false, optional: false, required: true
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // workspace_url - computed: false, optional: true, required: false
  private _workspaceUrl?: string; 
  public get workspaceUrl() {
    return this.getStringAttribute('workspace_url');
  }
  public set workspaceUrl(value: string) {
    this._workspaceUrl = value;
  }
  public resetWorkspaceUrl() {
    this._workspaceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUrlInput() {
    return this._workspaceUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook databricks_mlflow_webhook}
*/
export class MlflowWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mlflow_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MlflowWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MlflowWebhook to import
  * @param importFromId The id of the existing MlflowWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MlflowWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_mlflow_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/mlflow_webhook databricks_mlflow_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MlflowWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: MlflowWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mlflow_webhook',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.86.0',
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
    this._description = config.description;
    this._events = config.events;
    this._id = config.id;
    this._modelName = config.modelName;
    this._status = config.status;
    this._httpUrlSpec.internalValue = config.httpUrlSpec;
    this._jobSpec.internalValue = config.jobSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
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

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // http_url_spec - computed: false, optional: true, required: false
  private _httpUrlSpec = new MlflowWebhookHttpUrlSpecOutputReference(this, "http_url_spec");
  public get httpUrlSpec() {
    return this._httpUrlSpec;
  }
  public putHttpUrlSpec(value: MlflowWebhookHttpUrlSpec) {
    this._httpUrlSpec.internalValue = value;
  }
  public resetHttpUrlSpec() {
    this._httpUrlSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUrlSpecInput() {
    return this._httpUrlSpec.internalValue;
  }

  // job_spec - computed: false, optional: true, required: false
  private _jobSpec = new MlflowWebhookJobSpecOutputReference(this, "job_spec");
  public get jobSpec() {
    return this._jobSpec;
  }
  public putJobSpec(value: MlflowWebhookJobSpec) {
    this._jobSpec.internalValue = value;
  }
  public resetJobSpec() {
    this._jobSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobSpecInput() {
    return this._jobSpec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._events),
      id: cdktf.stringToTerraform(this._id),
      model_name: cdktf.stringToTerraform(this._modelName),
      status: cdktf.stringToTerraform(this._status),
      http_url_spec: mlflowWebhookHttpUrlSpecToTerraform(this._httpUrlSpec.internalValue),
      job_spec: mlflowWebhookJobSpecToTerraform(this._jobSpec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._events),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_name: {
        value: cdktf.stringToHclTerraform(this._modelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_url_spec: {
        value: mlflowWebhookHttpUrlSpecToHclTerraform(this._httpUrlSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MlflowWebhookHttpUrlSpecList",
      },
      job_spec: {
        value: mlflowWebhookJobSpecToHclTerraform(this._jobSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MlflowWebhookJobSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
