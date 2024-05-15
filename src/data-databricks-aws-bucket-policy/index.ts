/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/data-sources/aws_bucket_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksAwsBucketPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/data-sources/aws_bucket_policy#bucket DataDatabricksAwsBucketPolicy#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/data-sources/aws_bucket_policy#databricks_account_id DataDatabricksAwsBucketPolicy#databricks_account_id}
  */
  readonly databricksAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/data-sources/aws_bucket_policy#databricks_e2_account_id DataDatabricksAwsBucketPolicy#databricks_e2_account_id}
  */
  readonly databricksE2AccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/data-sources/aws_bucket_policy#full_access_role DataDatabricksAwsBucketPolicy#full_access_role}
  */
  readonly fullAccessRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/data-sources/aws_bucket_policy#id DataDatabricksAwsBucketPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/data-sources/aws_bucket_policy databricks_aws_bucket_policy}
*/
export class DataDatabricksAwsBucketPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_aws_bucket_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksAwsBucketPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAwsBucketPolicy to import
  * @param importFromId The id of the existing DataDatabricksAwsBucketPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/data-sources/aws_bucket_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAwsBucketPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_aws_bucket_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.43.0/docs/data-sources/aws_bucket_policy databricks_aws_bucket_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAwsBucketPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAwsBucketPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_aws_bucket_policy',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.43.0',
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
    this._bucket = config.bucket;
    this._databricksAccountId = config.databricksAccountId;
    this._databricksE2AccountId = config.databricksE2AccountId;
    this._fullAccessRole = config.fullAccessRole;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // databricks_account_id - computed: false, optional: true, required: false
  private _databricksAccountId?: string; 
  public get databricksAccountId() {
    return this.getStringAttribute('databricks_account_id');
  }
  public set databricksAccountId(value: string) {
    this._databricksAccountId = value;
  }
  public resetDatabricksAccountId() {
    this._databricksAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksAccountIdInput() {
    return this._databricksAccountId;
  }

  // databricks_e2_account_id - computed: false, optional: true, required: false
  private _databricksE2AccountId?: string; 
  public get databricksE2AccountId() {
    return this.getStringAttribute('databricks_e2_account_id');
  }
  public set databricksE2AccountId(value: string) {
    this._databricksE2AccountId = value;
  }
  public resetDatabricksE2AccountId() {
    this._databricksE2AccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksE2AccountIdInput() {
    return this._databricksE2AccountId;
  }

  // full_access_role - computed: false, optional: true, required: false
  private _fullAccessRole?: string; 
  public get fullAccessRole() {
    return this.getStringAttribute('full_access_role');
  }
  public set fullAccessRole(value: string) {
    this._fullAccessRole = value;
  }
  public resetFullAccessRole() {
    this._fullAccessRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullAccessRoleInput() {
    return this._fullAccessRole;
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      databricks_account_id: cdktf.stringToTerraform(this._databricksAccountId),
      databricks_e2_account_id: cdktf.stringToTerraform(this._databricksE2AccountId),
      full_access_role: cdktf.stringToTerraform(this._fullAccessRole),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      databricks_account_id: {
        value: cdktf.stringToHclTerraform(this._databricksAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      databricks_e2_account_id: {
        value: cdktf.stringToHclTerraform(this._databricksE2AccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_access_role: {
        value: cdktf.stringToHclTerraform(this._fullAccessRole),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
