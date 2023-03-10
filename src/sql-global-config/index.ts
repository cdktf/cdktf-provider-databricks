// https://www.terraform.io/docs/providers/databricks/r/sql_global_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlGlobalConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}
  */
  readonly dataAccessConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}
  */
  readonly enableServerlessCompute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_global_config#id SqlGlobalConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_global_config#security_policy SqlGlobalConfig#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}
  */
  readonly sqlConfigParams?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/sql_global_config databricks_sql_global_config}
*/
export class SqlGlobalConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_global_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/sql_global_config databricks_sql_global_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlGlobalConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SqlGlobalConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_sql_global_config',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.12.0',
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
    this._dataAccessConfig = config.dataAccessConfig;
    this._enableServerlessCompute = config.enableServerlessCompute;
    this._id = config.id;
    this._instanceProfileArn = config.instanceProfileArn;
    this._securityPolicy = config.securityPolicy;
    this._sqlConfigParams = config.sqlConfigParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_access_config - computed: false, optional: true, required: false
  private _dataAccessConfig?: { [key: string]: string }; 
  public get dataAccessConfig() {
    return this.getStringMapAttribute('data_access_config');
  }
  public set dataAccessConfig(value: { [key: string]: string }) {
    this._dataAccessConfig = value;
  }
  public resetDataAccessConfig() {
    this._dataAccessConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessConfigInput() {
    return this._dataAccessConfig;
  }

  // enable_serverless_compute - computed: false, optional: true, required: false
  private _enableServerlessCompute?: boolean | cdktf.IResolvable; 
  public get enableServerlessCompute() {
    return this.getBooleanAttribute('enable_serverless_compute');
  }
  public set enableServerlessCompute(value: boolean | cdktf.IResolvable) {
    this._enableServerlessCompute = value;
  }
  public resetEnableServerlessCompute() {
    this._enableServerlessCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServerlessComputeInput() {
    return this._enableServerlessCompute;
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

  // instance_profile_arn - computed: false, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // security_policy - computed: false, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }

  // sql_config_params - computed: false, optional: true, required: false
  private _sqlConfigParams?: { [key: string]: string }; 
  public get sqlConfigParams() {
    return this.getStringMapAttribute('sql_config_params');
  }
  public set sqlConfigParams(value: { [key: string]: string }) {
    this._sqlConfigParams = value;
  }
  public resetSqlConfigParams() {
    this._sqlConfigParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConfigParamsInput() {
    return this._sqlConfigParams;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_access_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._dataAccessConfig),
      enable_serverless_compute: cdktf.booleanToTerraform(this._enableServerlessCompute),
      id: cdktf.stringToTerraform(this._id),
      instance_profile_arn: cdktf.stringToTerraform(this._instanceProfileArn),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      sql_config_params: cdktf.hashMapper(cdktf.stringToTerraform)(this._sqlConfigParams),
    };
  }
}
