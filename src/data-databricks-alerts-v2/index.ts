/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksAlertsV2Config extends cdktf.TerraformMetaArguments {
}
export interface DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}
  */
  readonly userEmail?: string;
}

export function dataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsToTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_id: cdktf.stringToTerraform(struct!.destinationId),
    user_email: cdktf.stringToTerraform(struct!.userEmail),
  }
}


export function dataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsToHclTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions | cdktf.IResolvable): any {
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

export class DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions | cdktf.IResolvable | undefined) {
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

  // destination_id - computed: true, optional: true, required: false
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

  // user_email - computed: true, optional: true, required: false
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

export class DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference {
    return new DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAlertsV2ResultsEvaluationNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}
  */
  readonly notifyOnOk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}
  */
  readonly retriggerSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}
  */
  readonly subscriptions?: DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions[] | cdktf.IResolvable;
}

export function dataDatabricksAlertsV2ResultsEvaluationNotificationToTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluationNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify_on_ok: cdktf.booleanToTerraform(struct!.notifyOnOk),
    retrigger_seconds: cdktf.numberToTerraform(struct!.retriggerSeconds),
    subscriptions: cdktf.listMapper(dataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsToTerraform, false)(struct!.subscriptions),
  }
}


export function dataDatabricksAlertsV2ResultsEvaluationNotificationToHclTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluationNotification | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsToHclTerraform, false)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAlertsV2ResultsEvaluationNotification | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAlertsV2ResultsEvaluationNotification | cdktf.IResolvable | undefined) {
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

  // notify_on_ok - computed: true, optional: true, required: false
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

  // retrigger_seconds - computed: true, optional: true, required: false
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

  // subscriptions - computed: true, optional: true, required: false
  private _subscriptions = new DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: DataDatabricksAlertsV2ResultsEvaluationNotificationSubscriptions[] | cdktf.IResolvable) {
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
export interface DataDatabricksAlertsV2ResultsEvaluationSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}
  */
  readonly name?: string;
}

export function dataDatabricksAlertsV2ResultsEvaluationSourceToTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluationSource | cdktf.IResolvable): any {
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


export function dataDatabricksAlertsV2ResultsEvaluationSourceToHclTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluationSource | cdktf.IResolvable): any {
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

export class DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAlertsV2ResultsEvaluationSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAlertsV2ResultsEvaluationSource | cdktf.IResolvable | undefined) {
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

  // aggregation - computed: true, optional: true, required: false
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

  // display - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
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
export interface DataDatabricksAlertsV2ResultsEvaluationThresholdColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}
  */
  readonly name?: string;
}

export function dataDatabricksAlertsV2ResultsEvaluationThresholdColumnToTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluationThresholdColumn | cdktf.IResolvable): any {
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


export function dataDatabricksAlertsV2ResultsEvaluationThresholdColumnToHclTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluationThresholdColumn | cdktf.IResolvable): any {
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

export class DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAlertsV2ResultsEvaluationThresholdColumn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAlertsV2ResultsEvaluationThresholdColumn | cdktf.IResolvable | undefined) {
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

  // aggregation - computed: true, optional: true, required: false
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

  // display - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
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
export interface DataDatabricksAlertsV2ResultsEvaluationThresholdValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}
  */
  readonly boolValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}
  */
  readonly doubleValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}
  */
  readonly stringValue?: string;
}

export function dataDatabricksAlertsV2ResultsEvaluationThresholdValueToTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluationThresholdValue | cdktf.IResolvable): any {
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


export function dataDatabricksAlertsV2ResultsEvaluationThresholdValueToHclTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluationThresholdValue | cdktf.IResolvable): any {
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

export class DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAlertsV2ResultsEvaluationThresholdValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAlertsV2ResultsEvaluationThresholdValue | cdktf.IResolvable | undefined) {
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

  // bool_value - computed: true, optional: true, required: false
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

  // double_value - computed: true, optional: true, required: false
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

  // string_value - computed: true, optional: true, required: false
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
export interface DataDatabricksAlertsV2ResultsEvaluationThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}
  */
  readonly column?: DataDatabricksAlertsV2ResultsEvaluationThresholdColumn;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}
  */
  readonly value?: DataDatabricksAlertsV2ResultsEvaluationThresholdValue;
}

export function dataDatabricksAlertsV2ResultsEvaluationThresholdToTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluationThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: dataDatabricksAlertsV2ResultsEvaluationThresholdColumnToTerraform(struct!.column),
    value: dataDatabricksAlertsV2ResultsEvaluationThresholdValueToTerraform(struct!.value),
  }
}


export function dataDatabricksAlertsV2ResultsEvaluationThresholdToHclTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluationThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: dataDatabricksAlertsV2ResultsEvaluationThresholdColumnToHclTerraform(struct!.column),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAlertsV2ResultsEvaluationThresholdColumn",
    },
    value: {
      value: dataDatabricksAlertsV2ResultsEvaluationThresholdValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAlertsV2ResultsEvaluationThresholdValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAlertsV2ResultsEvaluationThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAlertsV2ResultsEvaluationThreshold | cdktf.IResolvable | undefined) {
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

  // column - computed: true, optional: true, required: false
  private _column = new DataDatabricksAlertsV2ResultsEvaluationThresholdColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: DataDatabricksAlertsV2ResultsEvaluationThresholdColumn) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value = new DataDatabricksAlertsV2ResultsEvaluationThresholdValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataDatabricksAlertsV2ResultsEvaluationThresholdValue) {
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
export interface DataDatabricksAlertsV2ResultsEvaluation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}
  */
  readonly emptyResultState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}
  */
  readonly notification?: DataDatabricksAlertsV2ResultsEvaluationNotification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}
  */
  readonly source?: DataDatabricksAlertsV2ResultsEvaluationSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}
  */
  readonly threshold?: DataDatabricksAlertsV2ResultsEvaluationThreshold;
}

export function dataDatabricksAlertsV2ResultsEvaluationToTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    empty_result_state: cdktf.stringToTerraform(struct!.emptyResultState),
    notification: dataDatabricksAlertsV2ResultsEvaluationNotificationToTerraform(struct!.notification),
    source: dataDatabricksAlertsV2ResultsEvaluationSourceToTerraform(struct!.source),
    threshold: dataDatabricksAlertsV2ResultsEvaluationThresholdToTerraform(struct!.threshold),
  }
}


export function dataDatabricksAlertsV2ResultsEvaluationToHclTerraform(struct?: DataDatabricksAlertsV2ResultsEvaluation | cdktf.IResolvable): any {
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
      value: dataDatabricksAlertsV2ResultsEvaluationNotificationToHclTerraform(struct!.notification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAlertsV2ResultsEvaluationNotification",
    },
    source: {
      value: dataDatabricksAlertsV2ResultsEvaluationSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAlertsV2ResultsEvaluationSource",
    },
    threshold: {
      value: dataDatabricksAlertsV2ResultsEvaluationThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAlertsV2ResultsEvaluationThreshold",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAlertsV2ResultsEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAlertsV2ResultsEvaluation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAlertsV2ResultsEvaluation | cdktf.IResolvable | undefined) {
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

  // comparison_operator - computed: true, optional: true, required: false
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

  // empty_result_state - computed: true, optional: true, required: false
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

  // notification - computed: true, optional: true, required: false
  private _notification = new DataDatabricksAlertsV2ResultsEvaluationNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: DataDatabricksAlertsV2ResultsEvaluationNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // source - computed: true, optional: true, required: false
  private _source = new DataDatabricksAlertsV2ResultsEvaluationSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataDatabricksAlertsV2ResultsEvaluationSource) {
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

  // threshold - computed: true, optional: true, required: false
  private _threshold = new DataDatabricksAlertsV2ResultsEvaluationThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: DataDatabricksAlertsV2ResultsEvaluationThreshold) {
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
export interface DataDatabricksAlertsV2ResultsSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}
  */
  readonly pauseStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}
  */
  readonly quartzCronSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}
  */
  readonly timezoneId?: string;
}

export function dataDatabricksAlertsV2ResultsScheduleToTerraform(struct?: DataDatabricksAlertsV2ResultsSchedule | cdktf.IResolvable): any {
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


export function dataDatabricksAlertsV2ResultsScheduleToHclTerraform(struct?: DataDatabricksAlertsV2ResultsSchedule | cdktf.IResolvable): any {
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

export class DataDatabricksAlertsV2ResultsScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAlertsV2ResultsSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAlertsV2ResultsSchedule | cdktf.IResolvable | undefined) {
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

  // pause_status - computed: true, optional: true, required: false
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

  // quartz_cron_schedule - computed: true, optional: true, required: false
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

  // timezone_id - computed: true, optional: true, required: false
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
export interface DataDatabricksAlertsV2Results {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#custom_description DataDatabricksAlertsV2#custom_description}
  */
  readonly customDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#custom_summary DataDatabricksAlertsV2#custom_summary}
  */
  readonly customSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#display_name DataDatabricksAlertsV2#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#evaluation DataDatabricksAlertsV2#evaluation}
  */
  readonly evaluation?: DataDatabricksAlertsV2ResultsEvaluation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#parent_path DataDatabricksAlertsV2#parent_path}
  */
  readonly parentPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#query_text DataDatabricksAlertsV2#query_text}
  */
  readonly queryText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#run_as_user_name DataDatabricksAlertsV2#run_as_user_name}
  */
  readonly runAsUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#schedule DataDatabricksAlertsV2#schedule}
  */
  readonly schedule?: DataDatabricksAlertsV2ResultsSchedule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#warehouse_id DataDatabricksAlertsV2#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function dataDatabricksAlertsV2ResultsToTerraform(struct?: DataDatabricksAlertsV2Results): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_description: cdktf.stringToTerraform(struct!.customDescription),
    custom_summary: cdktf.stringToTerraform(struct!.customSummary),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    evaluation: dataDatabricksAlertsV2ResultsEvaluationToTerraform(struct!.evaluation),
    parent_path: cdktf.stringToTerraform(struct!.parentPath),
    query_text: cdktf.stringToTerraform(struct!.queryText),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
    schedule: dataDatabricksAlertsV2ResultsScheduleToTerraform(struct!.schedule),
    warehouse_id: cdktf.stringToTerraform(struct!.warehouseId),
  }
}


export function dataDatabricksAlertsV2ResultsToHclTerraform(struct?: DataDatabricksAlertsV2Results): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_description: {
      value: cdktf.stringToHclTerraform(struct!.customDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_summary: {
      value: cdktf.stringToHclTerraform(struct!.customSummary),
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
    evaluation: {
      value: dataDatabricksAlertsV2ResultsEvaluationToHclTerraform(struct!.evaluation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAlertsV2ResultsEvaluation",
    },
    parent_path: {
      value: cdktf.stringToHclTerraform(struct!.parentPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_text: {
      value: cdktf.stringToHclTerraform(struct!.queryText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: dataDatabricksAlertsV2ResultsScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAlertsV2ResultsSchedule",
    },
    warehouse_id: {
      value: cdktf.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAlertsV2ResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksAlertsV2Results | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDescription = this._customDescription;
    }
    if (this._customSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSummary = this._customSummary;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._evaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluation = this._evaluation?.internalValue;
    }
    if (this._parentPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentPath = this._parentPath;
    }
    if (this._queryText !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryText = this._queryText;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAlertsV2Results | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customDescription = undefined;
      this._customSummary = undefined;
      this._displayName = undefined;
      this._evaluation.internalValue = undefined;
      this._parentPath = undefined;
      this._queryText = undefined;
      this._runAsUserName = undefined;
      this._schedule.internalValue = undefined;
      this._warehouseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customDescription = value.customDescription;
      this._customSummary = value.customSummary;
      this._displayName = value.displayName;
      this._evaluation.internalValue = value.evaluation;
      this._parentPath = value.parentPath;
      this._queryText = value.queryText;
      this._runAsUserName = value.runAsUserName;
      this._schedule.internalValue = value.schedule;
      this._warehouseId = value.warehouseId;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // custom_description - computed: true, optional: true, required: false
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

  // custom_summary - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
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

  // evaluation - computed: true, optional: true, required: false
  private _evaluation = new DataDatabricksAlertsV2ResultsEvaluationOutputReference(this, "evaluation");
  public get evaluation() {
    return this._evaluation;
  }
  public putEvaluation(value: DataDatabricksAlertsV2ResultsEvaluation) {
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

  // parent_path - computed: true, optional: true, required: false
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

  // query_text - computed: true, optional: true, required: false
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

  // run_as_user_name - computed: true, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new DataDatabricksAlertsV2ResultsScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataDatabricksAlertsV2ResultsSchedule) {
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

  // warehouse_id - computed: true, optional: true, required: false
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
}

export class DataDatabricksAlertsV2ResultsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAlertsV2Results[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksAlertsV2ResultsOutputReference {
    return new DataDatabricksAlertsV2ResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2 databricks_alerts_v2}
*/
export class DataDatabricksAlertsV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_alerts_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksAlertsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAlertsV2 to import
  * @param importFromId The id of the existing DataDatabricksAlertsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAlertsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_alerts_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/alerts_v2 databricks_alerts_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAlertsV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAlertsV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_alerts_v2',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.85.0',
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

  // results - computed: true, optional: false, required: false
  private _results = new DataDatabricksAlertsV2ResultsList(this, "results", false);
  public get results() {
    return this._results;
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
