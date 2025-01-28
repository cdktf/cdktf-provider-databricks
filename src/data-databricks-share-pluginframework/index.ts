/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksSharePluginframeworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#object DataDatabricksSharePluginframework#object}
  */
  readonly object?: DataDatabricksSharePluginframeworkObject[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#owner DataDatabricksSharePluginframework#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#storage_location DataDatabricksSharePluginframework#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#storage_root DataDatabricksSharePluginframework#storage_root}
  */
  readonly storageRoot?: string;
}
export interface DataDatabricksSharePluginframeworkObjectPartitionValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#op DataDatabricksSharePluginframework#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#recipient_property_key DataDatabricksSharePluginframework#recipient_property_key}
  */
  readonly recipientPropertyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}
  */
  readonly value?: string;
}

export function dataDatabricksSharePluginframeworkObjectPartitionValueToTerraform(struct?: DataDatabricksSharePluginframeworkObjectPartitionValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    op: cdktf.stringToTerraform(struct!.op),
    recipient_property_key: cdktf.stringToTerraform(struct!.recipientPropertyKey),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksSharePluginframeworkObjectPartitionValueToHclTerraform(struct?: DataDatabricksSharePluginframeworkObjectPartitionValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipient_property_key: {
      value: cdktf.stringToHclTerraform(struct!.recipientPropertyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksSharePluginframeworkObjectPartitionValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._recipientPropertyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipientPropertyKey = this._recipientPropertyKey;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSharePluginframeworkObjectPartitionValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._op = undefined;
      this._recipientPropertyKey = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._op = value.op;
      this._recipientPropertyKey = value.recipientPropertyKey;
      this._value = value.value;
    }
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

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // recipient_property_key - computed: false, optional: true, required: false
  private _recipientPropertyKey?: string; 
  public get recipientPropertyKey() {
    return this.getStringAttribute('recipient_property_key');
  }
  public set recipientPropertyKey(value: string) {
    this._recipientPropertyKey = value;
  }
  public resetRecipientPropertyKey() {
    this._recipientPropertyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientPropertyKeyInput() {
    return this._recipientPropertyKey;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataDatabricksSharePluginframeworkObjectPartitionValueList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksSharePluginframeworkObjectPartitionValue[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference {
    return new DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksSharePluginframeworkObjectPartition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}
  */
  readonly value?: DataDatabricksSharePluginframeworkObjectPartitionValue[] | cdktf.IResolvable;
}

export function dataDatabricksSharePluginframeworkObjectPartitionToTerraform(struct?: DataDatabricksSharePluginframeworkObjectPartition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.listMapper(dataDatabricksSharePluginframeworkObjectPartitionValueToTerraform, false)(struct!.value),
  }
}


export function dataDatabricksSharePluginframeworkObjectPartitionToHclTerraform(struct?: DataDatabricksSharePluginframeworkObjectPartition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.listMapperHcl(dataDatabricksSharePluginframeworkObjectPartitionValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksSharePluginframeworkObjectPartitionValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSharePluginframeworkObjectPartitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksSharePluginframeworkObjectPartition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSharePluginframeworkObjectPartition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value.internalValue = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataDatabricksSharePluginframeworkObjectPartitionValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DataDatabricksSharePluginframeworkObjectPartitionValue[] | cdktf.IResolvable) {
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

export class DataDatabricksSharePluginframeworkObjectPartitionList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksSharePluginframeworkObjectPartition[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksSharePluginframeworkObjectPartitionOutputReference {
    return new DataDatabricksSharePluginframeworkObjectPartitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksSharePluginframeworkObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#cdf_enabled DataDatabricksSharePluginframework#cdf_enabled}
  */
  readonly cdfEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#content DataDatabricksSharePluginframework#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#data_object_type DataDatabricksSharePluginframework#data_object_type}
  */
  readonly dataObjectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#history_data_sharing_status DataDatabricksSharePluginframework#history_data_sharing_status}
  */
  readonly historyDataSharingStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#partition DataDatabricksSharePluginframework#partition}
  */
  readonly partition?: DataDatabricksSharePluginframeworkObjectPartition[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#shared_as DataDatabricksSharePluginframework#shared_as}
  */
  readonly sharedAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#start_version DataDatabricksSharePluginframework#start_version}
  */
  readonly startVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#string_shared_as DataDatabricksSharePluginframework#string_shared_as}
  */
  readonly stringSharedAs?: string;
}

export function dataDatabricksSharePluginframeworkObjectToTerraform(struct?: DataDatabricksSharePluginframeworkObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdf_enabled: cdktf.booleanToTerraform(struct!.cdfEnabled),
    comment: cdktf.stringToTerraform(struct!.comment),
    content: cdktf.stringToTerraform(struct!.content),
    data_object_type: cdktf.stringToTerraform(struct!.dataObjectType),
    history_data_sharing_status: cdktf.stringToTerraform(struct!.historyDataSharingStatus),
    name: cdktf.stringToTerraform(struct!.name),
    partition: cdktf.listMapper(dataDatabricksSharePluginframeworkObjectPartitionToTerraform, false)(struct!.partition),
    shared_as: cdktf.stringToTerraform(struct!.sharedAs),
    start_version: cdktf.numberToTerraform(struct!.startVersion),
    string_shared_as: cdktf.stringToTerraform(struct!.stringSharedAs),
  }
}


export function dataDatabricksSharePluginframeworkObjectToHclTerraform(struct?: DataDatabricksSharePluginframeworkObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdf_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cdfEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_object_type: {
      value: cdktf.stringToHclTerraform(struct!.dataObjectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    history_data_sharing_status: {
      value: cdktf.stringToHclTerraform(struct!.historyDataSharingStatus),
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
    partition: {
      value: cdktf.listMapperHcl(dataDatabricksSharePluginframeworkObjectPartitionToHclTerraform, false)(struct!.partition),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksSharePluginframeworkObjectPartitionList",
    },
    shared_as: {
      value: cdktf.stringToHclTerraform(struct!.sharedAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_version: {
      value: cdktf.numberToHclTerraform(struct!.startVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_shared_as: {
      value: cdktf.stringToHclTerraform(struct!.stringSharedAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSharePluginframeworkObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksSharePluginframeworkObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdfEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdfEnabled = this._cdfEnabled;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._dataObjectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataObjectType = this._dataObjectType;
    }
    if (this._historyDataSharingStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.historyDataSharingStatus = this._historyDataSharingStatus;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._partition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition?.internalValue;
    }
    if (this._sharedAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedAs = this._sharedAs;
    }
    if (this._startVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.startVersion = this._startVersion;
    }
    if (this._stringSharedAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringSharedAs = this._stringSharedAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSharePluginframeworkObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cdfEnabled = undefined;
      this._comment = undefined;
      this._content = undefined;
      this._dataObjectType = undefined;
      this._historyDataSharingStatus = undefined;
      this._name = undefined;
      this._partition.internalValue = undefined;
      this._sharedAs = undefined;
      this._startVersion = undefined;
      this._stringSharedAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cdfEnabled = value.cdfEnabled;
      this._comment = value.comment;
      this._content = value.content;
      this._dataObjectType = value.dataObjectType;
      this._historyDataSharingStatus = value.historyDataSharingStatus;
      this._name = value.name;
      this._partition.internalValue = value.partition;
      this._sharedAs = value.sharedAs;
      this._startVersion = value.startVersion;
      this._stringSharedAs = value.stringSharedAs;
    }
  }

  // added_at - computed: true, optional: false, required: false
  public get addedAt() {
    return this.getNumberAttribute('added_at');
  }

  // added_by - computed: true, optional: false, required: false
  public get addedBy() {
    return this.getStringAttribute('added_by');
  }

  // cdf_enabled - computed: false, optional: true, required: false
  private _cdfEnabled?: boolean | cdktf.IResolvable; 
  public get cdfEnabled() {
    return this.getBooleanAttribute('cdf_enabled');
  }
  public set cdfEnabled(value: boolean | cdktf.IResolvable) {
    this._cdfEnabled = value;
  }
  public resetCdfEnabled() {
    this._cdfEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdfEnabledInput() {
    return this._cdfEnabled;
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

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // data_object_type - computed: false, optional: true, required: false
  private _dataObjectType?: string; 
  public get dataObjectType() {
    return this.getStringAttribute('data_object_type');
  }
  public set dataObjectType(value: string) {
    this._dataObjectType = value;
  }
  public resetDataObjectType() {
    this._dataObjectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataObjectTypeInput() {
    return this._dataObjectType;
  }

  // effective_cdf_enabled - computed: true, optional: false, required: false
  public get effectiveCdfEnabled() {
    return this.getBooleanAttribute('effective_cdf_enabled');
  }

  // effective_history_data_sharing_status - computed: true, optional: false, required: false
  public get effectiveHistoryDataSharingStatus() {
    return this.getStringAttribute('effective_history_data_sharing_status');
  }

  // effective_shared_as - computed: true, optional: false, required: false
  public get effectiveSharedAs() {
    return this.getStringAttribute('effective_shared_as');
  }

  // effective_start_version - computed: true, optional: false, required: false
  public get effectiveStartVersion() {
    return this.getNumberAttribute('effective_start_version');
  }

  // history_data_sharing_status - computed: false, optional: true, required: false
  private _historyDataSharingStatus?: string; 
  public get historyDataSharingStatus() {
    return this.getStringAttribute('history_data_sharing_status');
  }
  public set historyDataSharingStatus(value: string) {
    this._historyDataSharingStatus = value;
  }
  public resetHistoryDataSharingStatus() {
    this._historyDataSharingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyDataSharingStatusInput() {
    return this._historyDataSharingStatus;
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

  // partition - computed: false, optional: true, required: false
  private _partition = new DataDatabricksSharePluginframeworkObjectPartitionList(this, "partition", false);
  public get partition() {
    return this._partition;
  }
  public putPartition(value: DataDatabricksSharePluginframeworkObjectPartition[] | cdktf.IResolvable) {
    this._partition.internalValue = value;
  }
  public resetPartition() {
    this._partition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition.internalValue;
  }

  // shared_as - computed: false, optional: true, required: false
  private _sharedAs?: string; 
  public get sharedAs() {
    return this.getStringAttribute('shared_as');
  }
  public set sharedAs(value: string) {
    this._sharedAs = value;
  }
  public resetSharedAs() {
    this._sharedAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAsInput() {
    return this._sharedAs;
  }

  // start_version - computed: false, optional: true, required: false
  private _startVersion?: number; 
  public get startVersion() {
    return this.getNumberAttribute('start_version');
  }
  public set startVersion(value: number) {
    this._startVersion = value;
  }
  public resetStartVersion() {
    this._startVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startVersionInput() {
    return this._startVersion;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // string_shared_as - computed: false, optional: true, required: false
  private _stringSharedAs?: string; 
  public get stringSharedAs() {
    return this.getStringAttribute('string_shared_as');
  }
  public set stringSharedAs(value: string) {
    this._stringSharedAs = value;
  }
  public resetStringSharedAs() {
    this._stringSharedAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringSharedAsInput() {
    return this._stringSharedAs;
  }
}

export class DataDatabricksSharePluginframeworkObjectList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksSharePluginframeworkObject[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksSharePluginframeworkObjectOutputReference {
    return new DataDatabricksSharePluginframeworkObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework databricks_share_pluginframework}
*/
export class DataDatabricksSharePluginframework extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_share_pluginframework";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksSharePluginframework resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksSharePluginframework to import
  * @param importFromId The id of the existing DataDatabricksSharePluginframework that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksSharePluginframework to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_share_pluginframework", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework databricks_share_pluginframework} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksSharePluginframeworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksSharePluginframeworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_share_pluginframework',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.64.0',
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
    this._comment = config.comment;
    this._name = config.name;
    this._object.internalValue = config.object;
    this._owner = config.owner;
    this._storageLocation = config.storageLocation;
    this._storageRoot = config.storageRoot;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // effective_owner - computed: true, optional: false, required: false
  public get effectiveOwner() {
    return this.getStringAttribute('effective_owner');
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

  // object - computed: false, optional: true, required: false
  private _object = new DataDatabricksSharePluginframeworkObjectList(this, "object", false);
  public get object() {
    return this._object;
  }
  public putObject(value: DataDatabricksSharePluginframeworkObject[] | cdktf.IResolvable) {
    this._object.internalValue = value;
  }
  public resetObject() {
    this._object.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }

  // owner - computed: false, optional: true, required: false
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

  // storage_root - computed: false, optional: true, required: false
  private _storageRoot?: string; 
  public get storageRoot() {
    return this.getStringAttribute('storage_root');
  }
  public set storageRoot(value: string) {
    this._storageRoot = value;
  }
  public resetStorageRoot() {
    this._storageRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRootInput() {
    return this._storageRoot;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      name: cdktf.stringToTerraform(this._name),
      object: cdktf.listMapper(dataDatabricksSharePluginframeworkObjectToTerraform, false)(this._object.internalValue),
      owner: cdktf.stringToTerraform(this._owner),
      storage_location: cdktf.stringToTerraform(this._storageLocation),
      storage_root: cdktf.stringToTerraform(this._storageRoot),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object: {
        value: cdktf.listMapperHcl(dataDatabricksSharePluginframeworkObjectToHclTerraform, false)(this._object.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksSharePluginframeworkObjectList",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_location: {
        value: cdktf.stringToHclTerraform(this._storageLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_root: {
        value: cdktf.stringToHclTerraform(this._storageRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
