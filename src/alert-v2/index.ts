// https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#custom_description AlertV2#custom_description}
  */
  readonly customDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#custom_summary AlertV2#custom_summary}
  */
  readonly customSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#display_name AlertV2#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#evaluation AlertV2#evaluation}
  */
  readonly evaluation?: AlertV2Evaluation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#parent_path AlertV2#parent_path}
  */
  readonly parentPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#query_text AlertV2#query_text}
  */
  readonly queryText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#schedule AlertV2#schedule}
  */
  readonly schedule?: AlertV2Schedule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#warehouse_id AlertV2#warehouse_id}
  */
  readonly warehouseId?: string;
}
export interface AlertV2EvaluationNotificationSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#destination_id AlertV2#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#user_email AlertV2#user_email}
  */
  readonly userEmail?: string;
}

export function alertV2EvaluationNotificationSubscriptionsToTerraform(struct?: AlertV2EvaluationNotificationSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_id: cdktf.stringToTerraform(struct!.destinationId),
    user_email: cdktf.stringToTerraform(struct!.userEmail),
  }
}


export function alertV2EvaluationNotificationSubscriptionsToHclTerraform(struct?: AlertV2EvaluationNotificationSubscriptions | cdktf.IResolvable): any {
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
    user_email: {
      value: cdktf.stringToHclTerraform(struct!.userEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertV2EvaluationNotificationSubscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertV2EvaluationNotificationSubscriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationId = this._destinationId;
    }
    if (this._userEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.userEmail = this._userEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertV2EvaluationNotificationSubscriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationId = undefined;
      this._userEmail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationId = value.destinationId;
      this._userEmail = value.userEmail;
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

  // user_email - computed: false, optional: true, required: false
  private _userEmail?: string; 
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }
  public set userEmail(value: string) {
    this._userEmail = value;
  }
  public resetUserEmail() {
    this._userEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailInput() {
    return this._userEmail;
  }
}

export class AlertV2EvaluationNotificationSubscriptionsList extends cdktf.ComplexList {
  public internalValue? : AlertV2EvaluationNotificationSubscriptions[] | cdktf.IResolvable

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
  public get(index: number): AlertV2EvaluationNotificationSubscriptionsOutputReference {
    return new AlertV2EvaluationNotificationSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertV2EvaluationNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#notify_on_ok AlertV2#notify_on_ok}
  */
  readonly notifyOnOk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#retrigger_seconds AlertV2#retrigger_seconds}
  */
  readonly retriggerSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#subscriptions AlertV2#subscriptions}
  */
  readonly subscriptions?: AlertV2EvaluationNotificationSubscriptions[] | cdktf.IResolvable;
}

export function alertV2EvaluationNotificationToTerraform(struct?: AlertV2EvaluationNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify_on_ok: cdktf.booleanToTerraform(struct!.notifyOnOk),
    retrigger_seconds: cdktf.numberToTerraform(struct!.retriggerSeconds),
    subscriptions: cdktf.listMapper(alertV2EvaluationNotificationSubscriptionsToTerraform, false)(struct!.subscriptions),
  }
}


export function alertV2EvaluationNotificationToHclTerraform(struct?: AlertV2EvaluationNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notify_on_ok: {
      value: cdktf.booleanToHclTerraform(struct!.notifyOnOk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retrigger_seconds: {
      value: cdktf.numberToHclTerraform(struct!.retriggerSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subscriptions: {
      value: cdktf.listMapperHcl(alertV2EvaluationNotificationSubscriptionsToHclTerraform, false)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "AlertV2EvaluationNotificationSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertV2EvaluationNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertV2EvaluationNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifyOnOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOnOk = this._notifyOnOk;
    }
    if (this._retriggerSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriggerSeconds = this._retriggerSeconds;
    }
    if (this._subscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptions = this._subscriptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertV2EvaluationNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notifyOnOk = undefined;
      this._retriggerSeconds = undefined;
      this._subscriptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notifyOnOk = value.notifyOnOk;
      this._retriggerSeconds = value.retriggerSeconds;
      this._subscriptions.internalValue = value.subscriptions;
    }
  }

  // notify_on_ok - computed: false, optional: true, required: false
  private _notifyOnOk?: boolean | cdktf.IResolvable; 
  public get notifyOnOk() {
    return this.getBooleanAttribute('notify_on_ok');
  }
  public set notifyOnOk(value: boolean | cdktf.IResolvable) {
    this._notifyOnOk = value;
  }
  public resetNotifyOnOk() {
    this._notifyOnOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnOkInput() {
    return this._notifyOnOk;
  }

  // retrigger_seconds - computed: false, optional: true, required: false
  private _retriggerSeconds?: number; 
  public get retriggerSeconds() {
    return this.getNumberAttribute('retrigger_seconds');
  }
  public set retriggerSeconds(value: number) {
    this._retriggerSeconds = value;
  }
  public resetRetriggerSeconds() {
    this._retriggerSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriggerSecondsInput() {
    return this._retriggerSeconds;
  }

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions = new AlertV2EvaluationNotificationSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: AlertV2EvaluationNotificationSubscriptions[] | cdktf.IResolvable) {
    this._subscriptions.internalValue = value;
  }
  public resetSubscriptions() {
    this._subscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions.internalValue;
  }
}
export interface AlertV2EvaluationSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#aggregation AlertV2#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#display AlertV2#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#name AlertV2#name}
  */
  readonly name?: string;
}

export function alertV2EvaluationSourceToTerraform(struct?: AlertV2EvaluationSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    display: cdktf.stringToTerraform(struct!.display),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function alertV2EvaluationSourceToHclTerraform(struct?: AlertV2EvaluationSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertV2EvaluationSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertV2EvaluationSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertV2EvaluationSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._display = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._display = value.display;
      this._name = value.name;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface AlertV2EvaluationThresholdColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#aggregation AlertV2#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#display AlertV2#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#name AlertV2#name}
  */
  readonly name?: string;
}

export function alertV2EvaluationThresholdColumnToTerraform(struct?: AlertV2EvaluationThresholdColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    display: cdktf.stringToTerraform(struct!.display),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function alertV2EvaluationThresholdColumnToHclTerraform(struct?: AlertV2EvaluationThresholdColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertV2EvaluationThresholdColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertV2EvaluationThresholdColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertV2EvaluationThresholdColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._display = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._display = value.display;
      this._name = value.name;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface AlertV2EvaluationThresholdValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#bool_value AlertV2#bool_value}
  */
  readonly boolValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#double_value AlertV2#double_value}
  */
  readonly doubleValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#string_value AlertV2#string_value}
  */
  readonly stringValue?: string;
}

export function alertV2EvaluationThresholdValueToTerraform(struct?: AlertV2EvaluationThresholdValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktf.booleanToTerraform(struct!.boolValue),
    double_value: cdktf.numberToTerraform(struct!.doubleValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function alertV2EvaluationThresholdValueToHclTerraform(struct?: AlertV2EvaluationThresholdValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_value: {
      value: cdktf.booleanToHclTerraform(struct!.boolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    double_value: {
      value: cdktf.numberToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertV2EvaluationThresholdValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertV2EvaluationThresholdValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolValue = this._boolValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertV2EvaluationThresholdValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolValue = undefined;
      this._doubleValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolValue = value.boolValue;
      this._doubleValue = value.doubleValue;
      this._stringValue = value.stringValue;
    }
  }

  // bool_value - computed: false, optional: true, required: false
  private _boolValue?: boolean | cdktf.IResolvable; 
  public get boolValue() {
    return this.getBooleanAttribute('bool_value');
  }
  public set boolValue(value: boolean | cdktf.IResolvable) {
    this._boolValue = value;
  }
  public resetBoolValue() {
    this._boolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValueInput() {
    return this._boolValue;
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue?: number; 
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }
  public set doubleValue(value: number) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface AlertV2EvaluationThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#column AlertV2#column}
  */
  readonly column?: AlertV2EvaluationThresholdColumn;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#value AlertV2#value}
  */
  readonly value?: AlertV2EvaluationThresholdValue;
}

export function alertV2EvaluationThresholdToTerraform(struct?: AlertV2EvaluationThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: alertV2EvaluationThresholdColumnToTerraform(struct!.column),
    value: alertV2EvaluationThresholdValueToTerraform(struct!.value),
  }
}


export function alertV2EvaluationThresholdToHclTerraform(struct?: AlertV2EvaluationThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: alertV2EvaluationThresholdColumnToHclTerraform(struct!.column),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertV2EvaluationThresholdColumn",
    },
    value: {
      value: alertV2EvaluationThresholdValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertV2EvaluationThresholdValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertV2EvaluationThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertV2EvaluationThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertV2EvaluationThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column.internalValue = value.column;
      this._value.internalValue = value.value;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column = new AlertV2EvaluationThresholdColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: AlertV2EvaluationThresholdColumn) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertV2EvaluationThresholdValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertV2EvaluationThresholdValue) {
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
export interface AlertV2Evaluation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#comparison_operator AlertV2#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#empty_result_state AlertV2#empty_result_state}
  */
  readonly emptyResultState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#notification AlertV2#notification}
  */
  readonly notification?: AlertV2EvaluationNotification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#source AlertV2#source}
  */
  readonly source?: AlertV2EvaluationSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#threshold AlertV2#threshold}
  */
  readonly threshold?: AlertV2EvaluationThreshold;
}

export function alertV2EvaluationToTerraform(struct?: AlertV2Evaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    empty_result_state: cdktf.stringToTerraform(struct!.emptyResultState),
    notification: alertV2EvaluationNotificationToTerraform(struct!.notification),
    source: alertV2EvaluationSourceToTerraform(struct!.source),
    threshold: alertV2EvaluationThresholdToTerraform(struct!.threshold),
  }
}


export function alertV2EvaluationToHclTerraform(struct?: AlertV2Evaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_operator: {
      value: cdktf.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_result_state: {
      value: cdktf.stringToHclTerraform(struct!.emptyResultState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification: {
      value: alertV2EvaluationNotificationToHclTerraform(struct!.notification),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertV2EvaluationNotification",
    },
    source: {
      value: alertV2EvaluationSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertV2EvaluationSource",
    },
    threshold: {
      value: alertV2EvaluationThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertV2EvaluationThreshold",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertV2EvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertV2Evaluation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._emptyResultState !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyResultState = this._emptyResultState;
    }
    if (this._notification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertV2Evaluation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonOperator = undefined;
      this._emptyResultState = undefined;
      this._notification.internalValue = undefined;
      this._source.internalValue = undefined;
      this._threshold.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonOperator = value.comparisonOperator;
      this._emptyResultState = value.emptyResultState;
      this._notification.internalValue = value.notification;
      this._source.internalValue = value.source;
      this._threshold.internalValue = value.threshold;
    }
  }

  // comparison_operator - computed: false, optional: true, required: false
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  public resetComparisonOperator() {
    this._comparisonOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // empty_result_state - computed: false, optional: true, required: false
  private _emptyResultState?: string; 
  public get emptyResultState() {
    return this.getStringAttribute('empty_result_state');
  }
  public set emptyResultState(value: string) {
    this._emptyResultState = value;
  }
  public resetEmptyResultState() {
    this._emptyResultState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyResultStateInput() {
    return this._emptyResultState;
  }

  // last_evaluated_at - computed: true, optional: false, required: false
  public get lastEvaluatedAt() {
    return this.getStringAttribute('last_evaluated_at');
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new AlertV2EvaluationNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: AlertV2EvaluationNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new AlertV2EvaluationSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: AlertV2EvaluationSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new AlertV2EvaluationThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: AlertV2EvaluationThreshold) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}
export interface AlertV2Schedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#pause_status AlertV2#pause_status}
  */
  readonly pauseStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#quartz_cron_schedule AlertV2#quartz_cron_schedule}
  */
  readonly quartzCronSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#timezone_id AlertV2#timezone_id}
  */
  readonly timezoneId?: string;
}

export function alertV2ScheduleToTerraform(struct?: AlertV2Schedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pause_status: cdktf.stringToTerraform(struct!.pauseStatus),
    quartz_cron_schedule: cdktf.stringToTerraform(struct!.quartzCronSchedule),
    timezone_id: cdktf.stringToTerraform(struct!.timezoneId),
  }
}


export function alertV2ScheduleToHclTerraform(struct?: AlertV2Schedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pause_status: {
      value: cdktf.stringToHclTerraform(struct!.pauseStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quartz_cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.quartzCronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone_id: {
      value: cdktf.stringToHclTerraform(struct!.timezoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertV2ScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertV2Schedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pauseStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseStatus = this._pauseStatus;
    }
    if (this._quartzCronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.quartzCronSchedule = this._quartzCronSchedule;
    }
    if (this._timezoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezoneId = this._timezoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertV2Schedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pauseStatus = undefined;
      this._quartzCronSchedule = undefined;
      this._timezoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pauseStatus = value.pauseStatus;
      this._quartzCronSchedule = value.quartzCronSchedule;
      this._timezoneId = value.timezoneId;
    }
  }

  // pause_status - computed: false, optional: true, required: false
  private _pauseStatus?: string; 
  public get pauseStatus() {
    return this.getStringAttribute('pause_status');
  }
  public set pauseStatus(value: string) {
    this._pauseStatus = value;
  }
  public resetPauseStatus() {
    this._pauseStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseStatusInput() {
    return this._pauseStatus;
  }

  // quartz_cron_schedule - computed: false, optional: true, required: false
  private _quartzCronSchedule?: string; 
  public get quartzCronSchedule() {
    return this.getStringAttribute('quartz_cron_schedule');
  }
  public set quartzCronSchedule(value: string) {
    this._quartzCronSchedule = value;
  }
  public resetQuartzCronSchedule() {
    this._quartzCronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quartzCronScheduleInput() {
    return this._quartzCronSchedule;
  }

  // timezone_id - computed: false, optional: true, required: false
  private _timezoneId?: string; 
  public get timezoneId() {
    return this.getStringAttribute('timezone_id');
  }
  public set timezoneId(value: string) {
    this._timezoneId = value;
  }
  public resetTimezoneId() {
    this._timezoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneIdInput() {
    return this._timezoneId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2 databricks_alert_v2}
*/
export class AlertV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_alert_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertV2 to import
  * @param importFromId The id of the existing AlertV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_alert_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/alert_v2 databricks_alert_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: AlertV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_alert_v2',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.77.0',
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
    this._customDescription = config.customDescription;
    this._customSummary = config.customSummary;
    this._displayName = config.displayName;
    this._evaluation.internalValue = config.evaluation;
    this._parentPath = config.parentPath;
    this._queryText = config.queryText;
    this._schedule.internalValue = config.schedule;
    this._warehouseId = config.warehouseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // custom_description - computed: false, optional: true, required: false
  private _customDescription?: string; 
  public get customDescription() {
    return this.getStringAttribute('custom_description');
  }
  public set customDescription(value: string) {
    this._customDescription = value;
  }
  public resetCustomDescription() {
    this._customDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDescriptionInput() {
    return this._customDescription;
  }

  // custom_summary - computed: false, optional: true, required: false
  private _customSummary?: string; 
  public get customSummary() {
    return this.getStringAttribute('custom_summary');
  }
  public set customSummary(value: string) {
    this._customSummary = value;
  }
  public resetCustomSummary() {
    this._customSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSummaryInput() {
    return this._customSummary;
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

  // evaluation - computed: false, optional: true, required: false
  private _evaluation = new AlertV2EvaluationOutputReference(this, "evaluation");
  public get evaluation() {
    return this._evaluation;
  }
  public putEvaluation(value: AlertV2Evaluation) {
    this._evaluation.internalValue = value;
  }
  public resetEvaluation() {
    this._evaluation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationInput() {
    return this._evaluation.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // owner_user_name - computed: true, optional: false, required: false
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // parent_path - computed: false, optional: true, required: false
  private _parentPath?: string; 
  public get parentPath() {
    return this.getStringAttribute('parent_path');
  }
  public set parentPath(value: string) {
    this._parentPath = value;
  }
  public resetParentPath() {
    this._parentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPathInput() {
    return this._parentPath;
  }

  // query_text - computed: false, optional: true, required: false
  private _queryText?: string; 
  public get queryText() {
    return this.getStringAttribute('query_text');
  }
  public set queryText(value: string) {
    this._queryText = value;
  }
  public resetQueryText() {
    this._queryText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTextInput() {
    return this._queryText;
  }

  // run_as_user_name - computed: true, optional: false, required: false
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new AlertV2ScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: AlertV2Schedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_description: cdktf.stringToTerraform(this._customDescription),
      custom_summary: cdktf.stringToTerraform(this._customSummary),
      display_name: cdktf.stringToTerraform(this._displayName),
      evaluation: alertV2EvaluationToTerraform(this._evaluation.internalValue),
      parent_path: cdktf.stringToTerraform(this._parentPath),
      query_text: cdktf.stringToTerraform(this._queryText),
      schedule: alertV2ScheduleToTerraform(this._schedule.internalValue),
      warehouse_id: cdktf.stringToTerraform(this._warehouseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_description: {
        value: cdktf.stringToHclTerraform(this._customDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_summary: {
        value: cdktf.stringToHclTerraform(this._customSummary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaluation: {
        value: alertV2EvaluationToHclTerraform(this._evaluation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertV2Evaluation",
      },
      parent_path: {
        value: cdktf.stringToHclTerraform(this._parentPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_text: {
        value: cdktf.stringToHclTerraform(this._queryText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: alertV2ScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertV2Schedule",
      },
      warehouse_id: {
        value: cdktf.stringToHclTerraform(this._warehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
