// https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/aws_crossaccount_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksAwsCrossaccountPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/aws_crossaccount_policy#id DataDatabricksAwsCrossaccountPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/aws_crossaccount_policy#pass_roles DataDatabricksAwsCrossaccountPolicy#pass_roles}
  */
  readonly passRoles?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/aws_crossaccount_policy databricks_aws_crossaccount_policy}
*/
export class DataDatabricksAwsCrossaccountPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_aws_crossaccount_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksAwsCrossaccountPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAwsCrossaccountPolicy to import
  * @param importFromId The id of the existing DataDatabricksAwsCrossaccountPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/aws_crossaccount_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAwsCrossaccountPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_aws_crossaccount_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/data-sources/aws_crossaccount_policy databricks_aws_crossaccount_policy} Data Source
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
        providerVersion: '1.33.0',
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
