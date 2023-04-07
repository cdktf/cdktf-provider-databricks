// https://www.terraform.io/docs/providers/databricks/d/aws_crossaccount_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksAwsCrossaccountPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_crossaccount_policy#id DataDatabricksAwsCrossaccountPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_crossaccount_policy#pass_roles DataDatabricksAwsCrossaccountPolicy#pass_roles}
  */
  readonly passRoles?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/d/aws_crossaccount_policy databricks_aws_crossaccount_policy}
*/
export class DataDatabricksAwsCrossaccountPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_aws_crossaccount_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/d/aws_crossaccount_policy databricks_aws_crossaccount_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAwsCrossaccountPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAwsCrossaccountPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_aws_crossaccount_policy',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.14.2',
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
    this._id = config.id;
    this._passRoles = config.passRoles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // pass_roles - computed: false, optional: true, required: false
  private _passRoles?: string[]; 
  public get passRoles() {
    return this.getListAttribute('pass_roles');
  }
  public set passRoles(value: string[]) {
    this._passRoles = value;
  }
  public resetPassRoles() {
    this._passRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passRolesInput() {
    return this._passRoles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pass_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passRoles),
    };
  }
}
