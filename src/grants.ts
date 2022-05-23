// https://www.terraform.io/docs/providers/databricks/r/grants
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#catalog Grants#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#external_location Grants#external_location}
  */
  readonly externalLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#schema Grants#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#storage_credential Grants#storage_credential}
  */
  readonly storageCredential?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#table Grants#table}
  */
  readonly table?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#view Grants#view}
  */
  readonly view?: string;
  /**
  * grant block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#grant Grants#grant}
  */
  readonly grant: GrantsGrant[] | cdktf.IResolvable;
}
export interface GrantsGrant {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#principal Grants#principal}
  */
  readonly principal: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#privileges Grants#privileges}
  */
  readonly privileges: string[];
}

export function grantsGrantToTerraform(struct?: GrantsGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal: cdktf.stringToTerraform(struct!.principal),
    privileges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.privileges),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/grants databricks_grants}
*/
export class Grants extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_grants";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/grants databricks_grants} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantsConfig
  */
  public constructor(scope: Construct, id: string, config: GrantsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_grants',
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
    this._catalog = config.catalog;
    this._externalLocation = config.externalLocation;
    this._schema = config.schema;
    this._storageCredential = config.storageCredential;
    this._table = config.table;
    this._view = config.view;
    this._grant = config.grant;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // external_location - computed: false, optional: true, required: false
  private _externalLocation?: string; 
  public get externalLocation() {
    return this.getStringAttribute('external_location');
  }
  public set externalLocation(value: string) {
    this._externalLocation = value;
  }
  public resetExternalLocation() {
    this._externalLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLocationInput() {
    return this._externalLocation;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // storage_credential - computed: false, optional: true, required: false
  private _storageCredential?: string; 
  public get storageCredential() {
    return this.getStringAttribute('storage_credential');
  }
  public set storageCredential(value: string) {
    this._storageCredential = value;
  }
  public resetStorageCredential() {
    this._storageCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCredentialInput() {
    return this._storageCredential;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // grant - computed: false, optional: false, required: true
  private _grant?: GrantsGrant[] | cdktf.IResolvable; 
  public get grant() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('grant')));
  }
  public set grant(value: GrantsGrant[] | cdktf.IResolvable) {
    this._grant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantInput() {
    return this._grant;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog: cdktf.stringToTerraform(this._catalog),
      external_location: cdktf.stringToTerraform(this._externalLocation),
      schema: cdktf.stringToTerraform(this._schema),
      storage_credential: cdktf.stringToTerraform(this._storageCredential),
      table: cdktf.stringToTerraform(this._table),
      view: cdktf.stringToTerraform(this._view),
      grant: cdktf.listMapper(grantsGrantToTerraform)(this._grant),
    };
  }
}
