// https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions#anonymous_function SqlPermissions#anonymous_function}
  */
  readonly anonymousFunction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions#any_file SqlPermissions#any_file}
  */
  readonly anyFile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions#catalog SqlPermissions#catalog}
  */
  readonly catalog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions#cluster_id SqlPermissions#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions#database SqlPermissions#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions#id SqlPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions#table SqlPermissions#table}
  */
  readonly table?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions#view SqlPermissions#view}
  */
  readonly view?: string;
  /**
  * privilege_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions#privilege_assignments SqlPermissions#privilege_assignments}
  */
  readonly privilegeAssignments?: SqlPermissionsPrivilegeAssignments[] | cdktf.IResolvable;
}
export interface SqlPermissionsPrivilegeAssignments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions#principal SqlPermissions#principal}
  */
  readonly principal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions#privileges SqlPermissions#privileges}
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
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
  }
}


export function sqlPermissionsPrivilegeAssignmentsToHclTerraform(struct?: SqlPermissionsPrivilegeAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlPermissionsPrivilegeAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlPermissionsPrivilegeAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlPermissionsPrivilegeAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principal = undefined;
      this._privileges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principal = value.principal;
      this._privileges = value.privileges;
    }
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }
}

export class SqlPermissionsPrivilegeAssignmentsList extends cdktf.ComplexList {
  public internalValue? : SqlPermissionsPrivilegeAssignments[] | cdktf.IResolvable

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
  public get(index: number): SqlPermissionsPrivilegeAssignmentsOutputReference {
    return new SqlPermissionsPrivilegeAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions databricks_sql_permissions}
*/
export class SqlPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlPermissions to import
  * @param importFromId The id of the existing SqlPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_sql_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/sql_permissions databricks_sql_permissions} Resource
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
        providerVersion: '1.41.0',
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
    this._anonymousFunction = config.anonymousFunction;
    this._anyFile = config.anyFile;
    this._catalog = config.catalog;
    this._clusterId = config.clusterId;
    this._database = config.database;
    this._id = config.id;
    this._table = config.table;
    this._view = config.view;
    this._privilegeAssignments.internalValue = config.privilegeAssignments;
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
  private _privilegeAssignments = new SqlPermissionsPrivilegeAssignmentsList(this, "privilege_assignments", true);
  public get privilegeAssignments() {
    return this._privilegeAssignments;
  }
  public putPrivilegeAssignments(value: SqlPermissionsPrivilegeAssignments[] | cdktf.IResolvable) {
    this._privilegeAssignments.internalValue = value;
  }
  public resetPrivilegeAssignments() {
    this._privilegeAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeAssignmentsInput() {
    return this._privilegeAssignments.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      table: cdktf.stringToTerraform(this._table),
      view: cdktf.stringToTerraform(this._view),
      privilege_assignments: cdktf.listMapper(sqlPermissionsPrivilegeAssignmentsToTerraform, true)(this._privilegeAssignments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anonymous_function: {
        value: cdktf.booleanToHclTerraform(this._anonymousFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      any_file: {
        value: cdktf.booleanToHclTerraform(this._anyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      catalog: {
        value: cdktf.booleanToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
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
      table: {
        value: cdktf.stringToHclTerraform(this._table),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privilege_assignments: {
        value: cdktf.listMapperHcl(sqlPermissionsPrivilegeAssignmentsToHclTerraform, true)(this._privilegeAssignments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SqlPermissionsPrivilegeAssignmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
