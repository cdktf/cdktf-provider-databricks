// https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/data-sources/notification_destinations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksNotificationDestinationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/data-sources/notification_destinations#display_name_contains DataDatabricksNotificationDestinations#display_name_contains}
  */
  readonly displayNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/data-sources/notification_destinations#type DataDatabricksNotificationDestinations#type}
  */
  readonly type?: string;
  /**
  * notification_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/data-sources/notification_destinations#notification_destinations DataDatabricksNotificationDestinations#notification_destinations}
  */
  readonly notificationDestinations?: DataDatabricksNotificationDestinationsNotificationDestinations[] | cdktf.IResolvable;
}
export interface DataDatabricksNotificationDestinationsNotificationDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/data-sources/notification_destinations#destination_type DataDatabricksNotificationDestinations#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/data-sources/notification_destinations#display_name DataDatabricksNotificationDestinations#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/data-sources/notification_destinations#id DataDatabricksNotificationDestinations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataDatabricksNotificationDestinationsNotificationDestinationsToTerraform(struct?: DataDatabricksNotificationDestinationsNotificationDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksNotificationDestinationsNotificationDestinationsToHclTerraform(struct?: DataDatabricksNotificationDestinationsNotificationDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksNotificationDestinationsNotificationDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksNotificationDestinationsNotificationDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationType = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationType = value.destinationType;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // destination_type - computed: false, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: true, required: false
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
}

export class DataDatabricksNotificationDestinationsNotificationDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksNotificationDestinationsNotificationDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference {
    return new DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/data-sources/notification_destinations databricks_notification_destinations}
*/
export class DataDatabricksNotificationDestinations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_notification_destinations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksNotificationDestinations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksNotificationDestinations to import
  * @param importFromId The id of the existing DataDatabricksNotificationDestinations that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/data-sources/notification_destinations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksNotificationDestinations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_notification_destinations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.57.0/docs/data-sources/notification_destinations databricks_notification_destinations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksNotificationDestinationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksNotificationDestinationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_notification_destinations',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.57.0',
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
    this._displayNameContains = config.displayNameContains;
    this._type = config.type;
    this._notificationDestinations.internalValue = config.notificationDestinations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name_contains - computed: false, optional: true, required: false
  private _displayNameContains?: string; 
  public get displayNameContains() {
    return this.getStringAttribute('display_name_contains');
  }
  public set displayNameContains(value: string) {
    this._displayNameContains = value;
  }
  public resetDisplayNameContains() {
    this._displayNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameContainsInput() {
    return this._displayNameContains;
  }

  // type - computed: false, optional: true, required: false
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

  // notification_destinations - computed: false, optional: true, required: false
  private _notificationDestinations = new DataDatabricksNotificationDestinationsNotificationDestinationsList(this, "notification_destinations", false);
  public get notificationDestinations() {
    return this._notificationDestinations;
  }
  public putNotificationDestinations(value: DataDatabricksNotificationDestinationsNotificationDestinations[] | cdktf.IResolvable) {
    this._notificationDestinations.internalValue = value;
  }
  public resetNotificationDestinations() {
    this._notificationDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationDestinationsInput() {
    return this._notificationDestinations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name_contains: cdktf.stringToTerraform(this._displayNameContains),
      type: cdktf.stringToTerraform(this._type),
      notification_destinations: cdktf.listMapper(dataDatabricksNotificationDestinationsNotificationDestinationsToTerraform, true)(this._notificationDestinations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name_contains: {
        value: cdktf.stringToHclTerraform(this._displayNameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_destinations: {
        value: cdktf.listMapperHcl(dataDatabricksNotificationDestinationsNotificationDestinationsToHclTerraform, true)(this._notificationDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksNotificationDestinationsNotificationDestinationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
