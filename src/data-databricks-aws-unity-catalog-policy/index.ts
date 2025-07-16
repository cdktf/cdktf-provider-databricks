/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksAwsUnityCatalogPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_policy#aws_account_id DataDatabricksAwsUnityCatalogPolicy#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_policy#aws_partition DataDatabricksAwsUnityCatalogPolicy#aws_partition}
  */
  readonly awsPartition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_policy#bucket_name DataDatabricksAwsUnityCatalogPolicy#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_policy#id DataDatabricksAwsUnityCatalogPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_policy#kms_name DataDatabricksAwsUnityCatalogPolicy#kms_name}
  */
  readonly kmsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_policy#role_name DataDatabricksAwsUnityCatalogPolicy#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_policy databricks_aws_unity_catalog_policy}
*/
export class DataDatabricksAwsUnityCatalogPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_aws_unity_catalog_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAwsUnityCatalogPolicy to import
  * @param importFromId The id of the existing DataDatabricksAwsUnityCatalogPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAwsUnityCatalogPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_aws_unity_catalog_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_policy databricks_aws_unity_catalog_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAwsUnityCatalogPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAwsUnityCatalogPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_aws_unity_catalog_policy',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.85.0',
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
    this._awsAccountId = config.awsAccountId;
    this._awsPartition = config.awsPartition;
    this._bucketName = config.bucketName;
    this._id = config.id;
    this._kmsName = config.kmsName;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_partition - computed: false, optional: true, required: false
  private _awsPartition?: string; 
  public get awsPartition() {
    return this.getStringAttribute('aws_partition');
  }
  public set awsPartition(value: string) {
    this._awsPartition = value;
  }
  public resetAwsPartition() {
    this._awsPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPartitionInput() {
    return this._awsPartition;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
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

  // kms_name - computed: false, optional: true, required: false
  private _kmsName?: string; 
  public get kmsName() {
    return this.getStringAttribute('kms_name');
  }
  public set kmsName(value: string) {
    this._kmsName = value;
  }
  public resetKmsName() {
    this._kmsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsNameInput() {
    return this._kmsName;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      aws_partition: cdktf.stringToTerraform(this._awsPartition),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      id: cdktf.stringToTerraform(this._id),
      kms_name: cdktf.stringToTerraform(this._kmsName),
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_partition: {
        value: cdktf.stringToHclTerraform(this._awsPartition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
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
      kms_name: {
        value: cdktf.stringToHclTerraform(this._kmsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
