/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/rfa_access_request_destinations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksRfaAccessRequestDestinationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/rfa_access_request_destinations#destinations DataDatabricksRfaAccessRequestDestinations#destinations}
  */
  readonly destinations: DataDatabricksRfaAccessRequestDestinationsDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/rfa_access_request_destinations#securable DataDatabricksRfaAccessRequestDestinations#securable}
  */
  readonly securable: DataDatabricksRfaAccessRequestDestinationsSecurable;
}
export interface DataDatabricksRfaAccessRequestDestinationsDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/rfa_access_request_destinations#destination_id DataDatabricksRfaAccessRequestDestinations#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/rfa_access_request_destinations#destination_type DataDatabricksRfaAccessRequestDestinations#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/rfa_access_request_destinations#special_destination DataDatabricksRfaAccessRequestDestinations#special_destination}
  */
  readonly specialDestination?: string;
}

export function dataDatabricksRfaAccessRequestDestinationsDestinationsToTerraform(struct?: DataDatabricksRfaAccessRequestDestinationsDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_id: cdktf.stringToTerraform(struct!.destinationId),
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
    special_destination: cdktf.stringToTerraform(struct!.specialDestination),
  }
}


export function dataDatabricksRfaAccessRequestDestinationsDestinationsToHclTerraform(struct?: DataDatabricksRfaAccessRequestDestinationsDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    special_destination: {
      value: cdktf.stringToHclTerraform(struct!.specialDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksRfaAccessRequestDestinationsDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationId = this._destinationId;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._specialDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialDestination = this._specialDestination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRfaAccessRequestDestinationsDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationId = undefined;
      this._destinationType = undefined;
      this._specialDestination = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationId = value.destinationId;
      this._destinationType = value.destinationType;
      this._specialDestination = value.specialDestination;
    }
  }

  // destination_id - computed: false, optional: true, required: false
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  public resetDestinationId() {
    this._destinationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
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

  // special_destination - computed: false, optional: true, required: false
  private _specialDestination?: string; 
  public get specialDestination() {
    return this.getStringAttribute('special_destination');
  }
  public set specialDestination(value: string) {
    this._specialDestination = value;
  }
  public resetSpecialDestination() {
    this._specialDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialDestinationInput() {
    return this._specialDestination;
  }
}

export class DataDatabricksRfaAccessRequestDestinationsDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksRfaAccessRequestDestinationsDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference {
    return new DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRfaAccessRequestDestinationsSecurable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/rfa_access_request_destinations#full_name DataDatabricksRfaAccessRequestDestinations#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/rfa_access_request_destinations#provider_share DataDatabricksRfaAccessRequestDestinations#provider_share}
  */
  readonly providerShare?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/rfa_access_request_destinations#type DataDatabricksRfaAccessRequestDestinations#type}
  */
  readonly type?: string;
}

export function dataDatabricksRfaAccessRequestDestinationsSecurableToTerraform(struct?: DataDatabricksRfaAccessRequestDestinationsSecurable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_name: cdktf.stringToTerraform(struct!.fullName),
    provider_share: cdktf.stringToTerraform(struct!.providerShare),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataDatabricksRfaAccessRequestDestinationsSecurableToHclTerraform(struct?: DataDatabricksRfaAccessRequestDestinationsSecurable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_name: {
      value: cdktf.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_share: {
      value: cdktf.stringToHclTerraform(struct!.providerShare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksRfaAccessRequestDestinationsSecurable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._providerShare !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerShare = this._providerShare;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRfaAccessRequestDestinationsSecurable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fullName = undefined;
      this._providerShare = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fullName = value.fullName;
      this._providerShare = value.providerShare;
      this._type = value.type;
    }
  }

  // full_name - computed: false, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // provider_share - computed: false, optional: true, required: false
  private _providerShare?: string; 
  public get providerShare() {
    return this.getStringAttribute('provider_share');
  }
  public set providerShare(value: string) {
    this._providerShare = value;
  }
  public resetProviderShare() {
    this._providerShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerShareInput() {
    return this._providerShare;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/rfa_access_request_destinations databricks_rfa_access_request_destinations}
*/
export class DataDatabricksRfaAccessRequestDestinations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_rfa_access_request_destinations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksRfaAccessRequestDestinations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksRfaAccessRequestDestinations to import
  * @param importFromId The id of the existing DataDatabricksRfaAccessRequestDestinations that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/rfa_access_request_destinations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksRfaAccessRequestDestinations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_rfa_access_request_destinations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/rfa_access_request_destinations databricks_rfa_access_request_destinations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksRfaAccessRequestDestinationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksRfaAccessRequestDestinationsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_rfa_access_request_destinations',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.94.0',
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
    this._destinations.internalValue = config.destinations;
    this._securable.internalValue = config.securable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_any_destinations_hidden - computed: true, optional: false, required: false
  public get areAnyDestinationsHidden() {
    return this.getBooleanAttribute('are_any_destinations_hidden');
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new DataDatabricksRfaAccessRequestDestinationsDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataDatabricksRfaAccessRequestDestinationsDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // securable - computed: false, optional: false, required: true
  private _securable = new DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference(this, "securable");
  public get securable() {
    return this._securable;
  }
  public putSecurable(value: DataDatabricksRfaAccessRequestDestinationsSecurable) {
    this._securable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securableInput() {
    return this._securable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destinations: cdktf.listMapper(dataDatabricksRfaAccessRequestDestinationsDestinationsToTerraform, false)(this._destinations.internalValue),
      securable: dataDatabricksRfaAccessRequestDestinationsSecurableToTerraform(this._securable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destinations: {
        value: cdktf.listMapperHcl(dataDatabricksRfaAccessRequestDestinationsDestinationsToHclTerraform, false)(this._destinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksRfaAccessRequestDestinationsDestinationsList",
      },
      securable: {
        value: dataDatabricksRfaAccessRequestDestinationsSecurableToHclTerraform(this._securable.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksRfaAccessRequestDestinationsSecurable",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
