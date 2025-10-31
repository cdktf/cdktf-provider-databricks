/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksDatabaseInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances#page_size DataDatabricksDatabaseInstances#page_size}
  */
  readonly pageSize?: number;
}
export interface DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}
  */
  readonly branchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}
  */
  readonly lsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}
  */
  readonly name?: string;
}

export function dataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsToTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_time: cdktf.stringToTerraform(struct!.branchTime),
    lsn: cdktf.stringToTerraform(struct!.lsn),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsToHclTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_time: {
      value: cdktf.stringToHclTerraform(struct!.branchTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lsn: {
      value: cdktf.stringToHclTerraform(struct!.lsn),
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

export class DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchTime = this._branchTime;
    }
    if (this._lsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsn = this._lsn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchTime = undefined;
      this._lsn = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchTime = value.branchTime;
      this._lsn = value.lsn;
      this._name = value.name;
    }
  }

  // branch_time - computed: true, optional: true, required: false
  private _branchTime?: string; 
  public get branchTime() {
    return this.getStringAttribute('branch_time');
  }
  public set branchTime(value: string) {
    this._branchTime = value;
  }
  public resetBranchTime() {
    this._branchTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchTimeInput() {
    return this._branchTime;
  }

  // effective_lsn - computed: true, optional: false, required: false
  public get effectiveLsn() {
    return this.getStringAttribute('effective_lsn');
  }

  // lsn - computed: true, optional: true, required: false
  private _lsn?: string; 
  public get lsn() {
    return this.getStringAttribute('lsn');
  }
  public set lsn(value: string) {
    this._lsn = value;
  }
  public resetLsn() {
    this._lsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnInput() {
    return this._lsn;
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference {
    return new DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}
  */
  readonly value?: string;
}

export function dataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsToTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsToHclTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags): any {
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference {
    return new DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}
  */
  readonly value?: string;
}

export function dataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsToTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsToHclTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags): any {
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference {
    return new DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}
  */
  readonly branchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}
  */
  readonly lsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}
  */
  readonly name?: string;
}

export function dataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefToTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_time: cdktf.stringToTerraform(struct!.branchTime),
    lsn: cdktf.stringToTerraform(struct!.lsn),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefToHclTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_time: {
      value: cdktf.stringToHclTerraform(struct!.branchTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lsn: {
      value: cdktf.stringToHclTerraform(struct!.lsn),
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

export class DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchTime = this._branchTime;
    }
    if (this._lsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsn = this._lsn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchTime = undefined;
      this._lsn = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchTime = value.branchTime;
      this._lsn = value.lsn;
      this._name = value.name;
    }
  }

  // branch_time - computed: true, optional: true, required: false
  private _branchTime?: string; 
  public get branchTime() {
    return this.getStringAttribute('branch_time');
  }
  public set branchTime(value: string) {
    this._branchTime = value;
  }
  public resetBranchTime() {
    this._branchTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchTimeInput() {
    return this._branchTime;
  }

  // effective_lsn - computed: true, optional: false, required: false
  public get effectiveLsn() {
    return this.getStringAttribute('effective_lsn');
  }

  // lsn - computed: true, optional: true, required: false
  private _lsn?: string; 
  public get lsn() {
    return this.getStringAttribute('lsn');
  }
  public set lsn(value: string) {
    this._lsn = value;
  }
  public resetLsn() {
    this._lsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnInput() {
    return this._lsn;
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface DataDatabricksDatabaseInstancesDatabaseInstances {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}
  */
  readonly name: string;
}

export function dataDatabricksDatabaseInstancesDatabaseInstancesToTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksDatabaseInstancesDatabaseInstancesToHclTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstances): any {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDatabaseInstancesDatabaseInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getStringAttribute('capacity');
  }

  // child_instance_refs - computed: true, optional: false, required: false
  private _childInstanceRefs = new DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList(this, "child_instance_refs", false);
  public get childInstanceRefs() {
    return this._childInstanceRefs;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // custom_tags - computed: true, optional: false, required: false
  private _customTags = new DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }

  // effective_capacity - computed: true, optional: false, required: false
  public get effectiveCapacity() {
    return this.getStringAttribute('effective_capacity');
  }

  // effective_custom_tags - computed: true, optional: false, required: false
  private _effectiveCustomTags = new DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList(this, "effective_custom_tags", false);
  public get effectiveCustomTags() {
    return this._effectiveCustomTags;
  }

  // effective_enable_pg_native_login - computed: true, optional: false, required: false
  public get effectiveEnablePgNativeLogin() {
    return this.getBooleanAttribute('effective_enable_pg_native_login');
  }

  // effective_enable_readable_secondaries - computed: true, optional: false, required: false
  public get effectiveEnableReadableSecondaries() {
    return this.getBooleanAttribute('effective_enable_readable_secondaries');
  }

  // effective_node_count - computed: true, optional: false, required: false
  public get effectiveNodeCount() {
    return this.getNumberAttribute('effective_node_count');
  }

  // effective_retention_window_in_days - computed: true, optional: false, required: false
  public get effectiveRetentionWindowInDays() {
    return this.getNumberAttribute('effective_retention_window_in_days');
  }

  // effective_stopped - computed: true, optional: false, required: false
  public get effectiveStopped() {
    return this.getBooleanAttribute('effective_stopped');
  }

  // effective_usage_policy_id - computed: true, optional: false, required: false
  public get effectiveUsagePolicyId() {
    return this.getStringAttribute('effective_usage_policy_id');
  }

  // enable_pg_native_login - computed: true, optional: false, required: false
  public get enablePgNativeLogin() {
    return this.getBooleanAttribute('enable_pg_native_login');
  }

  // enable_readable_secondaries - computed: true, optional: false, required: false
  public get enableReadableSecondaries() {
    return this.getBooleanAttribute('enable_readable_secondaries');
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

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // parent_instance_ref - computed: true, optional: false, required: false
  private _parentInstanceRef = new DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference(this, "parent_instance_ref");
  public get parentInstanceRef() {
    return this._parentInstanceRef;
  }

  // pg_version - computed: true, optional: false, required: false
  public get pgVersion() {
    return this.getStringAttribute('pg_version');
  }

  // read_only_dns - computed: true, optional: false, required: false
  public get readOnlyDns() {
    return this.getStringAttribute('read_only_dns');
  }

  // read_write_dns - computed: true, optional: false, required: false
  public get readWriteDns() {
    return this.getStringAttribute('read_write_dns');
  }

  // retention_window_in_days - computed: true, optional: false, required: false
  public get retentionWindowInDays() {
    return this.getNumberAttribute('retention_window_in_days');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stopped - computed: true, optional: false, required: false
  public get stopped() {
    return this.getBooleanAttribute('stopped');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // usage_policy_id - computed: true, optional: false, required: false
  public get usagePolicyId() {
    return this.getStringAttribute('usage_policy_id');
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances databricks_database_instances}
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
  * @param importFromId The id of the existing DataDatabricksDatabaseInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDatabaseInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_database_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_instances databricks_database_instances} Data Source
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
        providerVersion: '1.96.0',
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
    this._pageSize = config.pageSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_instances - computed: true, optional: false, required: false
  private _databaseInstances = new DataDatabricksDatabaseInstancesDatabaseInstancesList(this, "database_instances", false);
  public get databaseInstances() {
    return this._databaseInstances;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktf.numberToTerraform(this._pageSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
