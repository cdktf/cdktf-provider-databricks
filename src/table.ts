// https://www.terraform.io/docs/providers/databricks/r/table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#catalog_name Table#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#comment Table#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#data_source_format Table#data_source_format}
  */
  readonly dataSourceFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#name Table#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#owner Table#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#properties Table#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#schema_name Table#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#storage_credential_name Table#storage_credential_name}
  */
  readonly storageCredentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#storage_location Table#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#table_type Table#table_type}
  */
  readonly tableType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#view_definition Table#view_definition}
  */
  readonly viewDefinition?: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#column Table#column}
  */
  readonly column: TableColumn[] | cdktf.IResolvable;
}
export interface TableColumn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#comment Table#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#name Table#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#nullable Table#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#partition_index Table#partition_index}
  */
  readonly partitionIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#position Table#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#type_interval_type Table#type_interval_type}
  */
  readonly typeIntervalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#type_json Table#type_json}
  */
  readonly typeJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#type_name Table#type_name}
  */
  readonly typeName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#type_precision Table#type_precision}
  */
  readonly typePrecision?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#type_scale Table#type_scale}
  */
  readonly typeScale?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/table#type_text Table#type_text}
  */
  readonly typeText: string;
}

export function tableColumnToTerraform(struct?: TableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    partition_index: cdktf.numberToTerraform(struct!.partitionIndex),
    position: cdktf.numberToTerraform(struct!.position),
    type_interval_type: cdktf.stringToTerraform(struct!.typeIntervalType),
    type_json: cdktf.stringToTerraform(struct!.typeJson),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    type_precision: cdktf.numberToTerraform(struct!.typePrecision),
    type_scale: cdktf.numberToTerraform(struct!.typeScale),
    type_text: cdktf.stringToTerraform(struct!.typeText),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/table databricks_table}
*/
export class Table extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/table databricks_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableConfig
  */
  public constructor(scope: Construct, id: string, config: TableConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_table',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '0.5.8',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogName = config.catalogName;
    this._comment = config.comment;
    this._dataSourceFormat = config.dataSourceFormat;
    this._name = config.name;
    this._owner = config.owner;
    this._properties = config.properties;
    this._schemaName = config.schemaName;
    this._storageCredentialName = config.storageCredentialName;
    this._storageLocation = config.storageLocation;
    this._tableType = config.tableType;
    this._viewDefinition = config.viewDefinition;
    this._column = config.column;
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

  // data_source_format - computed: false, optional: false, required: true
  private _dataSourceFormat?: string; 
  public get dataSourceFormat() {
    return this.getStringAttribute('data_source_format');
  }
  public set dataSourceFormat(value: string) {
    this._dataSourceFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFormatInput() {
    return this._dataSourceFormat;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // column - computed: false, optional: false, required: true
  private _column?: TableColumn[] | cdktf.IResolvable; 
  public get column() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('column');
  }
  public set column(value: TableColumn[] | cdktf.IResolvable) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_name: cdktf.stringToTerraform(this._catalogName),
      comment: cdktf.stringToTerraform(this._comment),
      data_source_format: cdktf.stringToTerraform(this._dataSourceFormat),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      storage_credential_name: cdktf.stringToTerraform(this._storageCredentialName),
      storage_location: cdktf.stringToTerraform(this._storageLocation),
      table_type: cdktf.stringToTerraform(this._tableType),
      view_definition: cdktf.stringToTerraform(this._viewDefinition),
      column: cdktf.listMapper(tableColumnToTerraform)(this._column),
    };
  }
}
