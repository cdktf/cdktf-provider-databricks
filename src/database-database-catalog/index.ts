/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseDatabaseCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#create_database_if_not_exists DatabaseDatabaseCatalog#create_database_if_not_exists}
  */
  readonly createDatabaseIfNotExists?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#database_instance_name DatabaseDatabaseCatalog#database_instance_name}
  */
  readonly databaseInstanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#database_name DatabaseDatabaseCatalog#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#name DatabaseDatabaseCatalog#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog databricks_database_database_catalog}
*/
export class DatabaseDatabaseCatalog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_database_database_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseDatabaseCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseDatabaseCatalog to import
  * @param importFromId The id of the existing DatabaseDatabaseCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseDatabaseCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_database_database_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/database_database_catalog databricks_database_database_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseDatabaseCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseDatabaseCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_database_database_catalog',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.96.0',
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
    this._createDatabaseIfNotExists = config.createDatabaseIfNotExists;
    this._databaseInstanceName = config.databaseInstanceName;
    this._databaseName = config.databaseName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_database_if_not_exists - computed: true, optional: true, required: false
  private _createDatabaseIfNotExists?: boolean | cdktf.IResolvable; 
  public get createDatabaseIfNotExists() {
    return this.getBooleanAttribute('create_database_if_not_exists');
  }
  public set createDatabaseIfNotExists(value: boolean | cdktf.IResolvable) {
    this._createDatabaseIfNotExists = value;
  }
  public resetCreateDatabaseIfNotExists() {
    this._createDatabaseIfNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDatabaseIfNotExistsInput() {
    return this._createDatabaseIfNotExists;
  }

  // database_instance_name - computed: false, optional: false, required: true
  private _databaseInstanceName?: string; 
  public get databaseInstanceName() {
    return this.getStringAttribute('database_instance_name');
  }
  public set databaseInstanceName(value: string) {
    this._databaseInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInstanceNameInput() {
    return this._databaseInstanceName;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_database_if_not_exists: cdktf.booleanToTerraform(this._createDatabaseIfNotExists),
      database_instance_name: cdktf.stringToTerraform(this._databaseInstanceName),
      database_name: cdktf.stringToTerraform(this._databaseName),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_database_if_not_exists: {
        value: cdktf.booleanToHclTerraform(this._createDatabaseIfNotExists),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database_instance_name: {
        value: cdktf.stringToHclTerraform(this._databaseInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
