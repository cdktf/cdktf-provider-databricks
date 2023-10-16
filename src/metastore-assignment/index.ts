/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/metastore_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetastoreAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/metastore_assignment#default_catalog_name MetastoreAssignment#default_catalog_name}
  */
  readonly defaultCatalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/metastore_assignment#id MetastoreAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/metastore_assignment#metastore_id MetastoreAssignment#metastore_id}
  */
  readonly metastoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/metastore_assignment#workspace_id MetastoreAssignment#workspace_id}
  */
  readonly workspaceId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/metastore_assignment databricks_metastore_assignment}
*/
export class MetastoreAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_metastore_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/metastore_assignment databricks_metastore_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetastoreAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: MetastoreAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_metastore_assignment',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.28.0',
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
    this._defaultCatalogName = config.defaultCatalogName;
    this._id = config.id;
    this._metastoreId = config.metastoreId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_catalog_name - computed: false, optional: true, required: false
  private _defaultCatalogName?: string; 
  public get defaultCatalogName() {
    return this.getStringAttribute('default_catalog_name');
  }
  public set defaultCatalogName(value: string) {
    this._defaultCatalogName = value;
  }
  public resetDefaultCatalogName() {
    this._defaultCatalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCatalogNameInput() {
    return this._defaultCatalogName;
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

  // metastore_id - computed: false, optional: false, required: true
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreIdInput() {
    return this._metastoreId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: number; 
  public get workspaceId() {
    return this.getNumberAttribute('workspace_id');
  }
  public set workspaceId(value: number) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_catalog_name: cdktf.stringToTerraform(this._defaultCatalogName),
      id: cdktf.stringToTerraform(this._id),
      metastore_id: cdktf.stringToTerraform(this._metastoreId),
      workspace_id: cdktf.numberToTerraform(this._workspaceId),
    };
  }
}
