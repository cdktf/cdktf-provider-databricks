/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_database_catalogs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksDatabaseDatabaseCatalogsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_database_catalogs#workspace_id DataDatabricksDatabaseDatabaseCatalogs#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_database_catalogs#create_database_if_not_exists DataDatabricksDatabaseDatabaseCatalogs#create_database_if_not_exists}
  */
  readonly createDatabaseIfNotExists?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_database_catalogs#database_instance_name DataDatabricksDatabaseDatabaseCatalogs#database_instance_name}
  */
  readonly databaseInstanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_database_catalogs#database_name DataDatabricksDatabaseDatabaseCatalogs#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_database_catalogs#name DataDatabricksDatabaseDatabaseCatalogs#name}
  */
  readonly name: string;
}

export function dataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsToTerraform(struct?: DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_database_if_not_exists: cdktf.booleanToTerraform(struct!.createDatabaseIfNotExists),
    database_instance_name: cdktf.stringToTerraform(struct!.databaseInstanceName),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsToHclTerraform(struct?: DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_database_if_not_exists: {
      value: cdktf.booleanToHclTerraform(struct!.createDatabaseIfNotExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database_instance_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseInstanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createDatabaseIfNotExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDatabaseIfNotExists = this._createDatabaseIfNotExists;
    }
    if (this._databaseInstanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseInstanceName = this._databaseInstanceName;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createDatabaseIfNotExists = undefined;
      this._databaseInstanceName = undefined;
      this._databaseName = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createDatabaseIfNotExists = value.createDatabaseIfNotExists;
      this._databaseInstanceName = value.databaseInstanceName;
      this._databaseName = value.databaseName;
      this._name = value.name;
    }
  }

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

  // database_instance_name - computed: true, optional: false, required: true
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

  // database_name - computed: true, optional: false, required: true
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

  // name - computed: true, optional: false, required: true
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
}

export class DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference {
    return new DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_database_catalogs databricks_database_database_catalogs}
*/
export class DataDatabricksDatabaseDatabaseCatalogs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_database_database_catalogs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksDatabaseDatabaseCatalogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDatabaseDatabaseCatalogs to import
  * @param importFromId The id of the existing DataDatabricksDatabaseDatabaseCatalogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_database_catalogs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDatabaseDatabaseCatalogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_database_database_catalogs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_database_catalogs databricks_database_database_catalogs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDatabaseDatabaseCatalogsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDatabaseDatabaseCatalogsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_database_database_catalogs',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.90.0',
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
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_catalogs - computed: true, optional: false, required: false
  private _databaseCatalogs = new DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList(this, "database_catalogs", false);
  public get databaseCatalogs() {
    return this._databaseCatalogs;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
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
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
