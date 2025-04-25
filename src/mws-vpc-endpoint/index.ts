/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwsVpcEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}
  */
  readonly awsEndpointServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}
  */
  readonly awsVpcEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#id MwsVpcEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#region MwsVpcEndpoint#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#state MwsVpcEndpoint#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}
  */
  readonly useCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}
  */
  readonly vpcEndpointName: string;
  /**
  * gcp_vpc_endpoint_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#gcp_vpc_endpoint_info MwsVpcEndpoint#gcp_vpc_endpoint_info}
  */
  readonly gcpVpcEndpointInfo?: MwsVpcEndpointGcpVpcEndpointInfo;
}
export interface MwsVpcEndpointGcpVpcEndpointInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#endpoint_region MwsVpcEndpoint#endpoint_region}
  */
  readonly endpointRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#project_id MwsVpcEndpoint#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#psc_connection_id MwsVpcEndpoint#psc_connection_id}
  */
  readonly pscConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#psc_endpoint_name MwsVpcEndpoint#psc_endpoint_name}
  */
  readonly pscEndpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#service_attachment_id MwsVpcEndpoint#service_attachment_id}
  */
  readonly serviceAttachmentId?: string;
}

export function mwsVpcEndpointGcpVpcEndpointInfoToTerraform(struct?: MwsVpcEndpointGcpVpcEndpointInfoOutputReference | MwsVpcEndpointGcpVpcEndpointInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_region: cdktf.stringToTerraform(struct!.endpointRegion),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    psc_connection_id: cdktf.stringToTerraform(struct!.pscConnectionId),
    psc_endpoint_name: cdktf.stringToTerraform(struct!.pscEndpointName),
    service_attachment_id: cdktf.stringToTerraform(struct!.serviceAttachmentId),
  }
}


export function mwsVpcEndpointGcpVpcEndpointInfoToHclTerraform(struct?: MwsVpcEndpointGcpVpcEndpointInfoOutputReference | MwsVpcEndpointGcpVpcEndpointInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_region: {
      value: cdktf.stringToHclTerraform(struct!.endpointRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psc_connection_id: {
      value: cdktf.stringToHclTerraform(struct!.pscConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psc_endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.pscEndpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_attachment_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAttachmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MwsVpcEndpointGcpVpcEndpointInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwsVpcEndpointGcpVpcEndpointInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointRegion = this._endpointRegion;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._pscConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscConnectionId = this._pscConnectionId;
    }
    if (this._pscEndpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscEndpointName = this._pscEndpointName;
    }
    if (this._serviceAttachmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAttachmentId = this._serviceAttachmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwsVpcEndpointGcpVpcEndpointInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointRegion = undefined;
      this._projectId = undefined;
      this._pscConnectionId = undefined;
      this._pscEndpointName = undefined;
      this._serviceAttachmentId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointRegion = value.endpointRegion;
      this._projectId = value.projectId;
      this._pscConnectionId = value.pscConnectionId;
      this._pscEndpointName = value.pscEndpointName;
      this._serviceAttachmentId = value.serviceAttachmentId;
    }
  }

  // endpoint_region - computed: false, optional: false, required: true
  private _endpointRegion?: string; 
  public get endpointRegion() {
    return this.getStringAttribute('endpoint_region');
  }
  public set endpointRegion(value: string) {
    this._endpointRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointRegionInput() {
    return this._endpointRegion;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // psc_connection_id - computed: true, optional: true, required: false
  private _pscConnectionId?: string; 
  public get pscConnectionId() {
    return this.getStringAttribute('psc_connection_id');
  }
  public set pscConnectionId(value: string) {
    this._pscConnectionId = value;
  }
  public resetPscConnectionId() {
    this._pscConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscConnectionIdInput() {
    return this._pscConnectionId;
  }

  // psc_endpoint_name - computed: false, optional: false, required: true
  private _pscEndpointName?: string; 
  public get pscEndpointName() {
    return this.getStringAttribute('psc_endpoint_name');
  }
  public set pscEndpointName(value: string) {
    this._pscEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pscEndpointNameInput() {
    return this._pscEndpointName;
  }

  // service_attachment_id - computed: true, optional: true, required: false
  private _serviceAttachmentId?: string; 
  public get serviceAttachmentId() {
    return this.getStringAttribute('service_attachment_id');
  }
  public set serviceAttachmentId(value: string) {
    this._serviceAttachmentId = value;
  }
  public resetServiceAttachmentId() {
    this._serviceAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAttachmentIdInput() {
    return this._serviceAttachmentId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint databricks_mws_vpc_endpoint}
*/
export class MwsVpcEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_vpc_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MwsVpcEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MwsVpcEndpoint to import
  * @param importFromId The id of the existing MwsVpcEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MwsVpcEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_mws_vpc_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/mws_vpc_endpoint databricks_mws_vpc_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MwsVpcEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: MwsVpcEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mws_vpc_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.75.0',
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
    this._accountId = config.accountId;
    this._awsAccountId = config.awsAccountId;
    this._awsEndpointServiceId = config.awsEndpointServiceId;
    this._awsVpcEndpointId = config.awsVpcEndpointId;
    this._id = config.id;
    this._region = config.region;
    this._state = config.state;
    this._useCase = config.useCase;
    this._vpcEndpointId = config.vpcEndpointId;
    this._vpcEndpointName = config.vpcEndpointName;
    this._gcpVpcEndpointInfo.internalValue = config.gcpVpcEndpointInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_endpoint_service_id - computed: true, optional: true, required: false
  private _awsEndpointServiceId?: string; 
  public get awsEndpointServiceId() {
    return this.getStringAttribute('aws_endpoint_service_id');
  }
  public set awsEndpointServiceId(value: string) {
    this._awsEndpointServiceId = value;
  }
  public resetAwsEndpointServiceId() {
    this._awsEndpointServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEndpointServiceIdInput() {
    return this._awsEndpointServiceId;
  }

  // aws_vpc_endpoint_id - computed: false, optional: true, required: false
  private _awsVpcEndpointId?: string; 
  public get awsVpcEndpointId() {
    return this.getStringAttribute('aws_vpc_endpoint_id');
  }
  public set awsVpcEndpointId(value: string) {
    this._awsVpcEndpointId = value;
  }
  public resetAwsVpcEndpointId() {
    this._awsVpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpcEndpointIdInput() {
    return this._awsVpcEndpointId;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // use_case - computed: true, optional: true, required: false
  private _useCase?: string; 
  public get useCase() {
    return this.getStringAttribute('use_case');
  }
  public set useCase(value: string) {
    this._useCase = value;
  }
  public resetUseCase() {
    this._useCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCaseInput() {
    return this._useCase;
  }

  // vpc_endpoint_id - computed: true, optional: true, required: false
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  public resetVpcEndpointId() {
    this._vpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }

  // vpc_endpoint_name - computed: false, optional: false, required: true
  private _vpcEndpointName?: string; 
  public get vpcEndpointName() {
    return this.getStringAttribute('vpc_endpoint_name');
  }
  public set vpcEndpointName(value: string) {
    this._vpcEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointNameInput() {
    return this._vpcEndpointName;
  }

  // gcp_vpc_endpoint_info - computed: false, optional: true, required: false
  private _gcpVpcEndpointInfo = new MwsVpcEndpointGcpVpcEndpointInfoOutputReference(this, "gcp_vpc_endpoint_info");
  public get gcpVpcEndpointInfo() {
    return this._gcpVpcEndpointInfo;
  }
  public putGcpVpcEndpointInfo(value: MwsVpcEndpointGcpVpcEndpointInfo) {
    this._gcpVpcEndpointInfo.internalValue = value;
  }
  public resetGcpVpcEndpointInfo() {
    this._gcpVpcEndpointInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpVpcEndpointInfoInput() {
    return this._gcpVpcEndpointInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      aws_endpoint_service_id: cdktf.stringToTerraform(this._awsEndpointServiceId),
      aws_vpc_endpoint_id: cdktf.stringToTerraform(this._awsVpcEndpointId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      state: cdktf.stringToTerraform(this._state),
      use_case: cdktf.stringToTerraform(this._useCase),
      vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
      vpc_endpoint_name: cdktf.stringToTerraform(this._vpcEndpointName),
      gcp_vpc_endpoint_info: mwsVpcEndpointGcpVpcEndpointInfoToTerraform(this._gcpVpcEndpointInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_endpoint_service_id: {
        value: cdktf.stringToHclTerraform(this._awsEndpointServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_vpc_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._awsVpcEndpointId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_case: {
        value: cdktf.stringToHclTerraform(this._useCase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._vpcEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._vpcEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_vpc_endpoint_info: {
        value: mwsVpcEndpointGcpVpcEndpointInfoToHclTerraform(this._gcpVpcEndpointInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MwsVpcEndpointGcpVpcEndpointInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
