// https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/database_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksDatabaseInstancesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataDatabricksDatabaseInstancesDatabaseInstances {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/database_instances#admin_password DataDatabricksDatabaseInstances#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/database_instances#admin_rolename DataDatabricksDatabaseInstances#admin_rolename}
  */
  readonly adminRolename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/database_instances#capacity DataDatabricksDatabaseInstances#capacity}
  */
  readonly capacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/database_instances#stopped DataDatabricksDatabaseInstances#stopped}
  */
  readonly stopped?: boolean | cdktf.IResolvable;
}

export function dataDatabricksDatabaseInstancesDatabaseInstancesToTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_rolename: cdktf.stringToTerraform(struct!.adminRolename),
    capacity: cdktf.stringToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
    stopped: cdktf.booleanToTerraform(struct!.stopped),
  }
}


export function dataDatabricksDatabaseInstancesDatabaseInstancesToHclTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_rolename: {
      value: cdktf.stringToHclTerraform(struct!.adminRolename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
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
    stopped: {
      value: cdktf.booleanToHclTerraform(struct!.stopped),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksDatabaseInstancesDatabaseInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminRolename !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminRolename = this._adminRolename;
    }
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stopped !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopped = this._stopped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseInstancesDatabaseInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._adminRolename = undefined;
      this._capacity = undefined;
      this._name = undefined;
      this._stopped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._adminRolename = value.adminRolename;
      this._capacity = value.capacity;
      this._name = value.name;
      this._stopped = value.stopped;
    }
  }

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_rolename - computed: true, optional: true, required: false
  private _adminRolename?: string; 
  public get adminRolename() {
    return this.getStringAttribute('admin_rolename');
  }
  public set adminRolename(value: string) {
    this._adminRolename = value;
  }
  public resetAdminRolename() {
    this._adminRolename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRolenameInput() {
    return this._adminRolename;
  }

  // capacity - computed: true, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
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

  // pg_version - computed: true, optional: false, required: false
  public get pgVersion() {
    return this.getStringAttribute('pg_version');
  }

  // read_write_dns - computed: true, optional: false, required: false
  public get readWriteDns() {
    return this.getStringAttribute('read_write_dns');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stopped - computed: true, optional: true, required: false
  private _stopped?: boolean | cdktf.IResolvable; 
  public get stopped() {
    return this.getBooleanAttribute('stopped');
  }
  public set stopped(value: boolean | cdktf.IResolvable) {
    this._stopped = value;
  }
  public resetStopped() {
    this._stopped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppedInput() {
    return this._stopped;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataDatabricksDatabaseInstancesDatabaseInstancesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksDatabaseInstancesDatabaseInstances[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference {
    return new DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/database_instances databricks_database_instances}
*/
export class DataDatabricksDatabaseInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_database_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksDatabaseInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDatabaseInstances to import
  * @param importFromId The id of the existing DataDatabricksDatabaseInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/database_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDatabaseInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_database_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/database_instances databricks_database_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDatabaseInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDatabaseInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_database_instances',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.81.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_instances - computed: true, optional: false, required: false
  private _databaseInstances = new DataDatabricksDatabaseInstancesDatabaseInstancesList(this, "database_instances", false);
  public get databaseInstances() {
    return this._databaseInstances;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
