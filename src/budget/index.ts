// https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#account_id Budget#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#budget_configuration_id Budget#budget_configuration_id}
  */
  readonly budgetConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#create_time Budget#create_time}
  */
  readonly createTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#display_name Budget#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#id Budget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#update_time Budget#update_time}
  */
  readonly updateTime?: number;
  /**
  * alert_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#alert_configurations Budget#alert_configurations}
  */
  readonly alertConfigurations?: BudgetAlertConfigurations[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#filter Budget#filter}
  */
  readonly filter?: BudgetFilter;
}
export interface BudgetAlertConfigurationsActionConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#action_configuration_id Budget#action_configuration_id}
  */
  readonly actionConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#action_type Budget#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#target Budget#target}
  */
  readonly target?: string;
}

export function budgetAlertConfigurationsActionConfigurationsToTerraform(struct?: BudgetAlertConfigurationsActionConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_configuration_id: cdktf.stringToTerraform(struct!.actionConfigurationId),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function budgetAlertConfigurationsActionConfigurationsToHclTerraform(struct?: BudgetAlertConfigurationsActionConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.actionConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetAlertConfigurationsActionConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetAlertConfigurationsActionConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionConfigurationId = this._actionConfigurationId;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetAlertConfigurationsActionConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionConfigurationId = undefined;
      this._actionType = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionConfigurationId = value.actionConfigurationId;
      this._actionType = value.actionType;
      this._target = value.target;
    }
  }

  // action_configuration_id - computed: true, optional: true, required: false
  private _actionConfigurationId?: string; 
  public get actionConfigurationId() {
    return this.getStringAttribute('action_configuration_id');
  }
  public set actionConfigurationId(value: string) {
    this._actionConfigurationId = value;
  }
  public resetActionConfigurationId() {
    this._actionConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionConfigurationIdInput() {
    return this._actionConfigurationId;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class BudgetAlertConfigurationsActionConfigurationsList extends cdktf.ComplexList {
  public internalValue? : BudgetAlertConfigurationsActionConfigurations[] | cdktf.IResolvable

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
  public get(index: number): BudgetAlertConfigurationsActionConfigurationsOutputReference {
    return new BudgetAlertConfigurationsActionConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BudgetAlertConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#alert_configuration_id Budget#alert_configuration_id}
  */
  readonly alertConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#quantity_threshold Budget#quantity_threshold}
  */
  readonly quantityThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#quantity_type Budget#quantity_type}
  */
  readonly quantityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#time_period Budget#time_period}
  */
  readonly timePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#trigger_type Budget#trigger_type}
  */
  readonly triggerType?: string;
  /**
  * action_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#action_configurations Budget#action_configurations}
  */
  readonly actionConfigurations?: BudgetAlertConfigurationsActionConfigurations[] | cdktf.IResolvable;
}

export function budgetAlertConfigurationsToTerraform(struct?: BudgetAlertConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_configuration_id: cdktf.stringToTerraform(struct!.alertConfigurationId),
    quantity_threshold: cdktf.stringToTerraform(struct!.quantityThreshold),
    quantity_type: cdktf.stringToTerraform(struct!.quantityType),
    time_period: cdktf.stringToTerraform(struct!.timePeriod),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
    action_configurations: cdktf.listMapper(budgetAlertConfigurationsActionConfigurationsToTerraform, true)(struct!.actionConfigurations),
  }
}


export function budgetAlertConfigurationsToHclTerraform(struct?: BudgetAlertConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.alertConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quantity_threshold: {
      value: cdktf.stringToHclTerraform(struct!.quantityThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quantity_type: {
      value: cdktf.stringToHclTerraform(struct!.quantityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_period: {
      value: cdktf.stringToHclTerraform(struct!.timePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_type: {
      value: cdktf.stringToHclTerraform(struct!.triggerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_configurations: {
      value: cdktf.listMapperHcl(budgetAlertConfigurationsActionConfigurationsToHclTerraform, true)(struct!.actionConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "BudgetAlertConfigurationsActionConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetAlertConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetAlertConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertConfigurationId = this._alertConfigurationId;
    }
    if (this._quantityThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityThreshold = this._quantityThreshold;
    }
    if (this._quantityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityType = this._quantityType;
    }
    if (this._timePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriod = this._timePeriod;
    }
    if (this._triggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerType = this._triggerType;
    }
    if (this._actionConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionConfigurations = this._actionConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetAlertConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertConfigurationId = undefined;
      this._quantityThreshold = undefined;
      this._quantityType = undefined;
      this._timePeriod = undefined;
      this._triggerType = undefined;
      this._actionConfigurations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertConfigurationId = value.alertConfigurationId;
      this._quantityThreshold = value.quantityThreshold;
      this._quantityType = value.quantityType;
      this._timePeriod = value.timePeriod;
      this._triggerType = value.triggerType;
      this._actionConfigurations.internalValue = value.actionConfigurations;
    }
  }

  // alert_configuration_id - computed: true, optional: true, required: false
  private _alertConfigurationId?: string; 
  public get alertConfigurationId() {
    return this.getStringAttribute('alert_configuration_id');
  }
  public set alertConfigurationId(value: string) {
    this._alertConfigurationId = value;
  }
  public resetAlertConfigurationId() {
    this._alertConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConfigurationIdInput() {
    return this._alertConfigurationId;
  }

  // quantity_threshold - computed: false, optional: true, required: false
  private _quantityThreshold?: string; 
  public get quantityThreshold() {
    return this.getStringAttribute('quantity_threshold');
  }
  public set quantityThreshold(value: string) {
    this._quantityThreshold = value;
  }
  public resetQuantityThreshold() {
    this._quantityThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityThresholdInput() {
    return this._quantityThreshold;
  }

  // quantity_type - computed: false, optional: true, required: false
  private _quantityType?: string; 
  public get quantityType() {
    return this.getStringAttribute('quantity_type');
  }
  public set quantityType(value: string) {
    this._quantityType = value;
  }
  public resetQuantityType() {
    this._quantityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityTypeInput() {
    return this._quantityType;
  }

  // time_period - computed: false, optional: true, required: false
  private _timePeriod?: string; 
  public get timePeriod() {
    return this.getStringAttribute('time_period');
  }
  public set timePeriod(value: string) {
    this._timePeriod = value;
  }
  public resetTimePeriod() {
    this._timePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInput() {
    return this._timePeriod;
  }

  // trigger_type - computed: false, optional: true, required: false
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  public resetTriggerType() {
    this._triggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // action_configurations - computed: false, optional: true, required: false
  private _actionConfigurations = new BudgetAlertConfigurationsActionConfigurationsList(this, "action_configurations", false);
  public get actionConfigurations() {
    return this._actionConfigurations;
  }
  public putActionConfigurations(value: BudgetAlertConfigurationsActionConfigurations[] | cdktf.IResolvable) {
    this._actionConfigurations.internalValue = value;
  }
  public resetActionConfigurations() {
    this._actionConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionConfigurationsInput() {
    return this._actionConfigurations.internalValue;
  }
}

export class BudgetAlertConfigurationsList extends cdktf.ComplexList {
  public internalValue? : BudgetAlertConfigurations[] | cdktf.IResolvable

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
  public get(index: number): BudgetAlertConfigurationsOutputReference {
    return new BudgetAlertConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BudgetFilterTagsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#operator Budget#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#values Budget#values}
  */
  readonly values?: string[];
}

export function budgetFilterTagsValueToTerraform(struct?: BudgetFilterTagsValueOutputReference | BudgetFilterTagsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function budgetFilterTagsValueToHclTerraform(struct?: BudgetFilterTagsValueOutputReference | BudgetFilterTagsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetFilterTagsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BudgetFilterTagsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetFilterTagsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface BudgetFilterTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#key Budget#key}
  */
  readonly key?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#value Budget#value}
  */
  readonly value?: BudgetFilterTagsValue;
}

export function budgetFilterTagsToTerraform(struct?: BudgetFilterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: budgetFilterTagsValueToTerraform(struct!.value),
  }
}


export function budgetFilterTagsToHclTerraform(struct?: BudgetFilterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: budgetFilterTagsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "BudgetFilterTagsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetFilterTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetFilterTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetFilterTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value = new BudgetFilterTagsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: BudgetFilterTagsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class BudgetFilterTagsList extends cdktf.ComplexList {
  public internalValue? : BudgetFilterTags[] | cdktf.IResolvable

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
  public get(index: number): BudgetFilterTagsOutputReference {
    return new BudgetFilterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BudgetFilterWorkspaceId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#operator Budget#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#values Budget#values}
  */
  readonly values?: number[];
}

export function budgetFilterWorkspaceIdToTerraform(struct?: BudgetFilterWorkspaceIdOutputReference | BudgetFilterWorkspaceId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}


export function budgetFilterWorkspaceIdToHclTerraform(struct?: BudgetFilterWorkspaceIdOutputReference | BudgetFilterWorkspaceId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetFilterWorkspaceIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BudgetFilterWorkspaceId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetFilterWorkspaceId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface BudgetFilter {
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#tags Budget#tags}
  */
  readonly tags?: BudgetFilterTags[] | cdktf.IResolvable;
  /**
  * workspace_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#workspace_id Budget#workspace_id}
  */
  readonly workspaceId?: BudgetFilterWorkspaceId;
}

export function budgetFilterToTerraform(struct?: BudgetFilterOutputReference | BudgetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(budgetFilterTagsToTerraform, true)(struct!.tags),
    workspace_id: budgetFilterWorkspaceIdToTerraform(struct!.workspaceId),
  }
}


export function budgetFilterToHclTerraform(struct?: BudgetFilterOutputReference | BudgetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(budgetFilterTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "BudgetFilterTagsList",
    },
    workspace_id: {
      value: budgetFilterWorkspaceIdToHclTerraform(struct!.workspaceId),
      isBlock: true,
      type: "list",
      storageClassType: "BudgetFilterWorkspaceIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BudgetFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._workspaceId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags.internalValue = undefined;
      this._workspaceId.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags.internalValue = value.tags;
      this._workspaceId.internalValue = value.workspaceId;
    }
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new BudgetFilterTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BudgetFilterTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId = new BudgetFilterWorkspaceIdOutputReference(this, "workspace_id");
  public get workspaceId() {
    return this._workspaceId;
  }
  public putWorkspaceId(value: BudgetFilterWorkspaceId) {
    this._workspaceId.internalValue = value;
  }
  public resetWorkspaceId() {
    this._workspaceId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget databricks_budget}
*/
export class Budget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Budget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Budget to import
  * @param importFromId The id of the existing Budget that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Budget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/budget databricks_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BudgetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BudgetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_budget',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.62.0',
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
    this._accountId = config.accountId;
    this._budgetConfigurationId = config.budgetConfigurationId;
    this._createTime = config.createTime;
    this._displayName = config.displayName;
    this._id = config.id;
    this._updateTime = config.updateTime;
    this._alertConfigurations.internalValue = config.alertConfigurations;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // budget_configuration_id - computed: true, optional: true, required: false
  private _budgetConfigurationId?: string; 
  public get budgetConfigurationId() {
    return this.getStringAttribute('budget_configuration_id');
  }
  public set budgetConfigurationId(value: string) {
    this._budgetConfigurationId = value;
  }
  public resetBudgetConfigurationId() {
    this._budgetConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetConfigurationIdInput() {
    return this._budgetConfigurationId;
  }

  // create_time - computed: true, optional: true, required: false
  private _createTime?: number; 
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }
  public set createTime(value: number) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
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

  // update_time - computed: true, optional: true, required: false
  private _updateTime?: number; 
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }
  public set updateTime(value: number) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }

  // alert_configurations - computed: false, optional: true, required: false
  private _alertConfigurations = new BudgetAlertConfigurationsList(this, "alert_configurations", false);
  public get alertConfigurations() {
    return this._alertConfigurations;
  }
  public putAlertConfigurations(value: BudgetAlertConfigurations[] | cdktf.IResolvable) {
    this._alertConfigurations.internalValue = value;
  }
  public resetAlertConfigurations() {
    this._alertConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConfigurationsInput() {
    return this._alertConfigurations.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new BudgetFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: BudgetFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      budget_configuration_id: cdktf.stringToTerraform(this._budgetConfigurationId),
      create_time: cdktf.numberToTerraform(this._createTime),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      update_time: cdktf.numberToTerraform(this._updateTime),
      alert_configurations: cdktf.listMapper(budgetAlertConfigurationsToTerraform, true)(this._alertConfigurations.internalValue),
      filter: budgetFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      budget_configuration_id: {
        value: cdktf.stringToHclTerraform(this._budgetConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.numberToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      update_time: {
        value: cdktf.numberToHclTerraform(this._updateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert_configurations: {
        value: cdktf.listMapperHcl(budgetAlertConfigurationsToHclTerraform, true)(this._alertConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BudgetAlertConfigurationsList",
      },
      filter: {
        value: budgetFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BudgetFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
