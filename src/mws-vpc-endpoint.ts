// https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwsVpcEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}
  */
  readonly awsEndpointServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}
  */
  readonly awsVpcEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#id MwsVpcEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#region MwsVpcEndpoint#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#state MwsVpcEndpoint#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}
  */
  readonly useCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}
  */
  readonly vpcEndpointName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint databricks_mws_vpc_endpoint}
*/
export class MwsVpcEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mws_vpc_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/mws_vpc_endpoint databricks_mws_vpc_endpoint} Resource
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
        providerVersion: '0.6.1',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
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

  // aws_vpc_endpoint_id - computed: false, optional: false, required: true
  private _awsVpcEndpointId?: string; 
  public get awsVpcEndpointId() {
    return this.getStringAttribute('aws_vpc_endpoint_id');
  }
  public set awsVpcEndpointId(value: string) {
    this._awsVpcEndpointId = value;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
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
    };
  }
}
