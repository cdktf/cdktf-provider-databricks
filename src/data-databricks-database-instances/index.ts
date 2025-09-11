/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksDatabaseInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#workspace_id DataDatabricksDatabaseInstances#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}
  */
  readonly branchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}
  */
  readonly lsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}
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
export interface DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}
  */
  readonly branchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}
  */
  readonly lsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}
  */
  readonly name?: string;
}

export function dataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefToTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef | cdktf.IResolvable): any {
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


export function dataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefToHclTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef | cdktf.IResolvable): any {
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branchTime = undefined;
      this._lsn = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#capacity DataDatabricksDatabaseInstances#capacity}
  */
  readonly capacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#enable_pg_native_login DataDatabricksDatabaseInstances#enable_pg_native_login}
  */
  readonly enablePgNativeLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#enable_readable_secondaries DataDatabricksDatabaseInstances#enable_readable_secondaries}
  */
  readonly enableReadableSecondaries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#node_count DataDatabricksDatabaseInstances#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#parent_instance_ref DataDatabricksDatabaseInstances#parent_instance_ref}
  */
  readonly parentInstanceRef?: DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#retention_window_in_days DataDatabricksDatabaseInstances#retention_window_in_days}
  */
  readonly retentionWindowInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#stopped DataDatabricksDatabaseInstances#stopped}
  */
  readonly stopped?: boolean | cdktf.IResolvable;
}

export function dataDatabricksDatabaseInstancesDatabaseInstancesToTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    enable_pg_native_login: cdktf.booleanToTerraform(struct!.enablePgNativeLogin),
    enable_readable_secondaries: cdktf.booleanToTerraform(struct!.enableReadableSecondaries),
    name: cdktf.stringToTerraform(struct!.name),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    parent_instance_ref: dataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefToTerraform(struct!.parentInstanceRef),
    retention_window_in_days: cdktf.numberToTerraform(struct!.retentionWindowInDays),
    stopped: cdktf.booleanToTerraform(struct!.stopped),
  }
}


export function dataDatabricksDatabaseInstancesDatabaseInstancesToHclTerraform(struct?: DataDatabricksDatabaseInstancesDatabaseInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_pg_native_login: {
      value: cdktf.booleanToHclTerraform(struct!.enablePgNativeLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_readable_secondaries: {
      value: cdktf.booleanToHclTerraform(struct!.enableReadableSecondaries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parent_instance_ref: {
      value: dataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefToHclTerraform(struct!.parentInstanceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef",
    },
    retention_window_in_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionWindowInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._enablePgNativeLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePgNativeLogin = this._enablePgNativeLogin;
    }
    if (this._enableReadableSecondaries !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableReadableSecondaries = this._enableReadableSecondaries;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._parentInstanceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentInstanceRef = this._parentInstanceRef?.internalValue;
    }
    if (this._retentionWindowInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionWindowInDays = this._retentionWindowInDays;
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
      this._capacity = undefined;
      this._enablePgNativeLogin = undefined;
      this._enableReadableSecondaries = undefined;
      this._name = undefined;
      this._nodeCount = undefined;
      this._parentInstanceRef.internalValue = undefined;
      this._retentionWindowInDays = undefined;
      this._stopped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacity = value.capacity;
      this._enablePgNativeLogin = value.enablePgNativeLogin;
      this._enableReadableSecondaries = value.enableReadableSecondaries;
      this._name = value.name;
      this._nodeCount = value.nodeCount;
      this._parentInstanceRef.internalValue = value.parentInstanceRef;
      this._retentionWindowInDays = value.retentionWindowInDays;
      this._stopped = value.stopped;
    }
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

  // enable_pg_native_login - computed: true, optional: true, required: false
  private _enablePgNativeLogin?: boolean | cdktf.IResolvable; 
  public get enablePgNativeLogin() {
    return this.getBooleanAttribute('enable_pg_native_login');
  }
  public set enablePgNativeLogin(value: boolean | cdktf.IResolvable) {
    this._enablePgNativeLogin = value;
  }
  public resetEnablePgNativeLogin() {
    this._enablePgNativeLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePgNativeLoginInput() {
    return this._enablePgNativeLogin;
  }

  // enable_readable_secondaries - computed: true, optional: true, required: false
  private _enableReadableSecondaries?: boolean | cdktf.IResolvable; 
  public get enableReadableSecondaries() {
    return this.getBooleanAttribute('enable_readable_secondaries');
  }
  public set enableReadableSecondaries(value: boolean | cdktf.IResolvable) {
    this._enableReadableSecondaries = value;
  }
  public resetEnableReadableSecondaries() {
    this._enableReadableSecondaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReadableSecondariesInput() {
    return this._enableReadableSecondaries;
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

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // parent_instance_ref - computed: true, optional: true, required: false
  private _parentInstanceRef = new DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference(this, "parent_instance_ref");
  public get parentInstanceRef() {
    return this._parentInstanceRef;
  }
  public putParentInstanceRef(value: DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef) {
    this._parentInstanceRef.internalValue = value;
  }
  public resetParentInstanceRef() {
    this._parentInstanceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInstanceRefInput() {
    return this._parentInstanceRef.internalValue;
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

  // retention_window_in_days - computed: true, optional: true, required: false
  private _retentionWindowInDays?: number; 
  public get retentionWindowInDays() {
    return this.getNumberAttribute('retention_window_in_days');
  }
  public set retentionWindowInDays(value: number) {
    this._retentionWindowInDays = value;
  }
  public resetRetentionWindowInDays() {
    this._retentionWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionWindowInDaysInput() {
    return this._retentionWindowInDays;
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances databricks_database_instances}
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
  * @param importFromId The id of the existing DataDatabricksDatabaseInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDatabaseInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_database_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances databricks_database_instances} Data Source
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
        providerVersion: '1.89.0',
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
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_instances - computed: true, optional: false, required: false
  private _databaseInstances = new DataDatabricksDatabaseInstancesDatabaseInstancesList(this, "database_instances", false);
  public get databaseInstances() {
    return this._databaseInstances;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
