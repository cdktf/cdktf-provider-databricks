/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#catalog_name SqlTable#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#cluster_id SqlTable#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#comment SqlTable#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#data_source_format SqlTable#data_source_format}
  */
  readonly dataSourceFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#id SqlTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#name SqlTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#properties SqlTable#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#schema_name SqlTable#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#storage_credential_name SqlTable#storage_credential_name}
  */
  readonly storageCredentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#storage_location SqlTable#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#table_type SqlTable#table_type}
  */
  readonly tableType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#view_definition SqlTable#view_definition}
  */
  readonly viewDefinition?: string;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#column SqlTable#column}
  */
  readonly column?: SqlTableColumn[] | cdktf.IResolvable;
}
export interface SqlTableColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#comment SqlTable#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#name SqlTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#nullable SqlTable#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table#type SqlTable#type}
  */
  readonly type: string;
}

export function sqlTableColumnToTerraform(struct?: SqlTableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    type: cdktf.stringToTerraform(struct!.type),
  }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlTableColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._nullable = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._nullable = value.nullable;
      this._type = value.type;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table databricks_sql_table}
*/
export class SqlTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/resources/sql_table databricks_sql_table} Resource
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
        providerVersion: '1.22.0',
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
    this._comment = config.comment;
    this._dataSourceFormat = config.dataSourceFormat;
    this._id = config.id;
    this._name = config.name;
    this._properties = config.properties;
    this._schemaName = config.schemaName;
    this._storageCredentialName = config.storageCredentialName;
    this._storageLocation = config.storageLocation;
    this._tableType = config.tableType;
    this._viewDefinition = config.viewDefinition;
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

  // properties - computed: true, optional: true, required: false
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
      comment: cdktf.stringToTerraform(this._comment),
      data_source_format: cdktf.stringToTerraform(this._dataSourceFormat),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      storage_credential_name: cdktf.stringToTerraform(this._storageCredentialName),
      storage_location: cdktf.stringToTerraform(this._storageLocation),
      table_type: cdktf.stringToTerraform(this._tableType),
      view_definition: cdktf.stringToTerraform(this._viewDefinition),
      column: cdktf.listMapper(sqlTableColumnToTerraform, true)(this._column.internalValue),
    };
  }
}
