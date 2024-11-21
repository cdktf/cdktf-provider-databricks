/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#catalog_name SqlTable#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#cluster_id SqlTable#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#cluster_keys SqlTable#cluster_keys}
  */
  readonly clusterKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#comment SqlTable#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#data_source_format SqlTable#data_source_format}
  */
  readonly dataSourceFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#id SqlTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#name SqlTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#options SqlTable#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#owner SqlTable#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#partitions SqlTable#partitions}
  */
  readonly partitions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#properties SqlTable#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#schema_name SqlTable#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#storage_credential_name SqlTable#storage_credential_name}
  */
  readonly storageCredentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#storage_location SqlTable#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#table_type SqlTable#table_type}
  */
  readonly tableType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#view_definition SqlTable#view_definition}
  */
  readonly viewDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#warehouse_id SqlTable#warehouse_id}
  */
  readonly warehouseId?: string;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#column SqlTable#column}
  */
  readonly column?: SqlTableColumn[] | cdktf.IResolvable;
}
export interface SqlTableColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#comment SqlTable#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#identity SqlTable#identity}
  */
  readonly identity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#name SqlTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#nullable SqlTable#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#type SqlTable#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#type_json SqlTable#type_json}
  */
  readonly typeJson?: string;
}

export function sqlTableColumnToTerraform(struct?: SqlTableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    identity: cdktf.stringToTerraform(struct!.identity),
    name: cdktf.stringToTerraform(struct!.name),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    type: cdktf.stringToTerraform(struct!.type),
    type_json: cdktf.stringToTerraform(struct!.typeJson),
  }
}


export function sqlTableColumnToHclTerraform(struct?: SqlTableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity: {
      value: cdktf.stringToHclTerraform(struct!.identity),
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
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_json: {
      value: cdktf.stringToHclTerraform(struct!.typeJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlTableColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SqlTableColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeJson = this._typeJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlTableColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._identity = undefined;
      this._name = undefined;
      this._nullable = undefined;
      this._type = undefined;
      this._typeJson = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._identity = value.identity;
      this._name = value.name;
      this._nullable = value.nullable;
      this._type = value.type;
      this._typeJson = value.typeJson;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_json - computed: true, optional: true, required: false
  private _typeJson?: string; 
  public get typeJson() {
    return this.getStringAttribute('type_json');
  }
  public set typeJson(value: string) {
    this._typeJson = value;
  }
  public resetTypeJson() {
    this._typeJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeJsonInput() {
    return this._typeJson;
  }
}

export class SqlTableColumnList extends cdktf.ComplexList {
  public internalValue? : SqlTableColumn[] | cdktf.IResolvable

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
  public get(index: number): SqlTableColumnOutputReference {
    return new SqlTableColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table databricks_sql_table}
*/
export class SqlTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlTable to import
  * @param importFromId The id of the existing SqlTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_sql_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.59.0/docs/resources/sql_table databricks_sql_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlTableConfig
  */
  public constructor(scope: Construct, id: string, config: SqlTableConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_sql_table',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.59.0',
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
    this._catalogName = config.catalogName;
    this._clusterId = config.clusterId;
    this._clusterKeys = config.clusterKeys;
    this._comment = config.comment;
    this._dataSourceFormat = config.dataSourceFormat;
    this._id = config.id;
    this._name = config.name;
    this._options = config.options;
    this._owner = config.owner;
    this._partitions = config.partitions;
    this._properties = config.properties;
    this._schemaName = config.schemaName;
    this._storageCredentialName = config.storageCredentialName;
    this._storageLocation = config.storageLocation;
    this._tableType = config.tableType;
    this._viewDefinition = config.viewDefinition;
    this._warehouseId = config.warehouseId;
    this._column.internalValue = config.column;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_name - computed: false, optional: false, required: true
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_keys - computed: false, optional: true, required: false
  private _clusterKeys?: string[]; 
  public get clusterKeys() {
    return this.getListAttribute('cluster_keys');
  }
  public set clusterKeys(value: string[]) {
    this._clusterKeys = value;
  }
  public resetClusterKeys() {
    this._clusterKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterKeysInput() {
    return this._clusterKeys;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // data_source_format - computed: false, optional: true, required: false
  private _dataSourceFormat?: string; 
  public get dataSourceFormat() {
    return this.getStringAttribute('data_source_format');
  }
  public set dataSourceFormat(value: string) {
    this._dataSourceFormat = value;
  }
  public resetDataSourceFormat() {
    this._dataSourceFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFormatInput() {
    return this._dataSourceFormat;
  }

  // effective_properties - computed: true, optional: false, required: false
  private _effectiveProperties = new cdktf.StringMap(this, "effective_properties");
  public get effectiveProperties() {
    return this._effectiveProperties;
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // partitions - computed: false, optional: true, required: false
  private _partitions?: string[]; 
  public get partitions() {
    return this.getListAttribute('partitions');
  }
  public set partitions(value: string[]) {
    this._partitions = value;
  }
  public resetPartitions() {
    this._partitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // storage_credential_name - computed: false, optional: true, required: false
  private _storageCredentialName?: string; 
  public get storageCredentialName() {
    return this.getStringAttribute('storage_credential_name');
  }
  public set storageCredentialName(value: string) {
    this._storageCredentialName = value;
  }
  public resetStorageCredentialName() {
    this._storageCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCredentialNameInput() {
    return this._storageCredentialName;
  }

  // storage_location - computed: false, optional: true, required: false
  private _storageLocation?: string; 
  public get storageLocation() {
    return this.getStringAttribute('storage_location');
  }
  public set storageLocation(value: string) {
    this._storageLocation = value;
  }
  public resetStorageLocation() {
    this._storageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation;
  }

  // table_type - computed: false, optional: false, required: true
  private _tableType?: string; 
  public get tableType() {
    return this.getStringAttribute('table_type');
  }
  public set tableType(value: string) {
    this._tableType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableTypeInput() {
    return this._tableType;
  }

  // view_definition - computed: false, optional: true, required: false
  private _viewDefinition?: string; 
  public get viewDefinition() {
    return this.getStringAttribute('view_definition');
  }
  public set viewDefinition(value: string) {
    this._viewDefinition = value;
  }
  public resetViewDefinition() {
    this._viewDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewDefinitionInput() {
    return this._viewDefinition;
  }

  // warehouse_id - computed: false, optional: true, required: false
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  public resetWarehouseId() {
    this._warehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // column - computed: false, optional: true, required: false
  private _column = new SqlTableColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: SqlTableColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_name: cdktf.stringToTerraform(this._catalogName),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterKeys),
      comment: cdktf.stringToTerraform(this._comment),
      data_source_format: cdktf.stringToTerraform(this._dataSourceFormat),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
      owner: cdktf.stringToTerraform(this._owner),
      partitions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._partitions),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      storage_credential_name: cdktf.stringToTerraform(this._storageCredentialName),
      storage_location: cdktf.stringToTerraform(this._storageLocation),
      table_type: cdktf.stringToTerraform(this._tableType),
      view_definition: cdktf.stringToTerraform(this._viewDefinition),
      warehouse_id: cdktf.stringToTerraform(this._warehouseId),
      column: cdktf.listMapper(sqlTableColumnToTerraform, true)(this._column.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_name: {
        value: cdktf.stringToHclTerraform(this._catalogName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_format: {
        value: cdktf.stringToHclTerraform(this._dataSourceFormat),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._options),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partitions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._partitions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_credential_name: {
        value: cdktf.stringToHclTerraform(this._storageCredentialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_location: {
        value: cdktf.stringToHclTerraform(this._storageLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_type: {
        value: cdktf.stringToHclTerraform(this._tableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_definition: {
        value: cdktf.stringToHclTerraform(this._viewDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse_id: {
        value: cdktf.stringToHclTerraform(this._warehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column: {
        value: cdktf.listMapperHcl(sqlTableColumnToHclTerraform, true)(this._column.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlTableColumnList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
