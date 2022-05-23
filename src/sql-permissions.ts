// https://www.terraform.io/docs/providers/databricks/r/sql_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_permissions#anonymous_function SqlPermissions#anonymous_function}
  */
  readonly anonymousFunction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_permissions#any_file SqlPermissions#any_file}
  */
  readonly anyFile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_permissions#catalog SqlPermissions#catalog}
  */
  readonly catalog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_permissions#cluster_id SqlPermissions#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_permissions#database SqlPermissions#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_permissions#table SqlPermissions#table}
  */
  readonly table?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_permissions#view SqlPermissions#view}
  */
  readonly view?: string;
  /**
  * privilege_assignments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_permissions#privilege_assignments SqlPermissions#privilege_assignments}
  */
  readonly privilegeAssignments?: SqlPermissionsPrivilegeAssignments[] | cdktf.IResolvable;
}
export interface SqlPermissionsPrivilegeAssignments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_permissions#principal SqlPermissions#principal}
  */
  readonly principal: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_permissions#privileges SqlPermissions#privileges}
  */
  readonly privileges: string[];
}

export function sqlPermissionsPrivilegeAssignmentsToTerraform(struct?: SqlPermissionsPrivilegeAssignments | cdktf.IResolvable): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/sql_permissions databricks_sql_permissions}
*/
export class SqlPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_permissions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/sql_permissions databricks_sql_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlPermissionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SqlPermissionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_sql_permissions',
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
    this._anonymousFunction = config.anonymousFunction;
    this._anyFile = config.anyFile;
    this._catalog = config.catalog;
    this._clusterId = config.clusterId;
    this._database = config.database;
    this._table = config.table;
    this._view = config.view;
    this._privilegeAssignments = config.privilegeAssignments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anonymous_function - computed: false, optional: true, required: false
  private _anonymousFunction?: boolean | cdktf.IResolvable; 
  public get anonymousFunction() {
    return this.getBooleanAttribute('anonymous_function');
  }
  public set anonymousFunction(value: boolean | cdktf.IResolvable) {
    this._anonymousFunction = value;
  }
  public resetAnonymousFunction() {
    this._anonymousFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousFunctionInput() {
    return this._anonymousFunction;
  }

  // any_file - computed: false, optional: true, required: false
  private _anyFile?: boolean | cdktf.IResolvable; 
  public get anyFile() {
    return this.getBooleanAttribute('any_file');
  }
  public set anyFile(value: boolean | cdktf.IResolvable) {
    this._anyFile = value;
  }
  public resetAnyFile() {
    this._anyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyFileInput() {
    return this._anyFile;
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: boolean | cdktf.IResolvable; 
  public get catalog() {
    return this.getBooleanAttribute('catalog');
  }
  public set catalog(value: boolean | cdktf.IResolvable) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
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

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // privilege_assignments - computed: false, optional: true, required: false
  private _privilegeAssignments?: SqlPermissionsPrivilegeAssignments[] | cdktf.IResolvable; 
  public get privilegeAssignments() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('privilege_assignments')));
  }
  public set privilegeAssignments(value: SqlPermissionsPrivilegeAssignments[] | cdktf.IResolvable) {
    this._privilegeAssignments = value;
  }
  public resetPrivilegeAssignments() {
    this._privilegeAssignments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeAssignmentsInput() {
    return this._privilegeAssignments;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anonymous_function: cdktf.booleanToTerraform(this._anonymousFunction),
      any_file: cdktf.booleanToTerraform(this._anyFile),
      catalog: cdktf.booleanToTerraform(this._catalog),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      database: cdktf.stringToTerraform(this._database),
      table: cdktf.stringToTerraform(this._table),
      view: cdktf.stringToTerraform(this._view),
      privilege_assignments: cdktf.listMapper(sqlPermissionsPrivilegeAssignmentsToTerraform)(this._privilegeAssignments),
    };
  }
}
