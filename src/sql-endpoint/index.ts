/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#auto_stop_mins SqlEndpoint#auto_stop_mins}
  */
  readonly autoStopMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#cluster_size SqlEndpoint#cluster_size}
  */
  readonly clusterSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#data_source_id SqlEndpoint#data_source_id}
  */
  readonly dataSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#enable_photon SqlEndpoint#enable_photon}
  */
  readonly enablePhoton?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#enable_serverless_compute SqlEndpoint#enable_serverless_compute}
  */
  readonly enableServerlessCompute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#id SqlEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#instance_profile_arn SqlEndpoint#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#max_num_clusters SqlEndpoint#max_num_clusters}
  */
  readonly maxNumClusters?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#min_num_clusters SqlEndpoint#min_num_clusters}
  */
  readonly minNumClusters?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#name SqlEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#spot_instance_policy SqlEndpoint#spot_instance_policy}
  */
  readonly spotInstancePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#warehouse_type SqlEndpoint#warehouse_type}
  */
  readonly warehouseType?: string;
  /**
  * channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#channel SqlEndpoint#channel}
  */
  readonly channel?: SqlEndpointChannel;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#tags SqlEndpoint#tags}
  */
  readonly tags?: SqlEndpointTags;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#timeouts SqlEndpoint#timeouts}
  */
  readonly timeouts?: SqlEndpointTimeouts;
}
export interface SqlEndpointHealthFailureReason {
}

export function sqlEndpointHealthFailureReasonToTerraform(struct?: SqlEndpointHealthFailureReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sqlEndpointHealthFailureReasonToHclTerraform(struct?: SqlEndpointHealthFailureReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SqlEndpointHealthFailureReasonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlEndpointHealthFailureReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlEndpointHealthFailureReason | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class SqlEndpointHealthFailureReasonList extends cdktf.ComplexList {

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
  public get(index: number): SqlEndpointHealthFailureReasonOutputReference {
    return new SqlEndpointHealthFailureReasonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlEndpointHealth {
}

export function sqlEndpointHealthToTerraform(struct?: SqlEndpointHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sqlEndpointHealthToHclTerraform(struct?: SqlEndpointHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SqlEndpointHealthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlEndpointHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlEndpointHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // failure_reason - computed: true, optional: false, required: false
  private _failureReason = new SqlEndpointHealthFailureReasonList(this, "failure_reason", false);
  public get failureReason() {
    return this._failureReason;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }
}

export class SqlEndpointHealthList extends cdktf.ComplexList {

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
  public get(index: number): SqlEndpointHealthOutputReference {
    return new SqlEndpointHealthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlEndpointOdbcParams {
}

export function sqlEndpointOdbcParamsToTerraform(struct?: SqlEndpointOdbcParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sqlEndpointOdbcParamsToHclTerraform(struct?: SqlEndpointOdbcParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SqlEndpointOdbcParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlEndpointOdbcParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlEndpointOdbcParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class SqlEndpointOdbcParamsList extends cdktf.ComplexList {

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
  public get(index: number): SqlEndpointOdbcParamsOutputReference {
    return new SqlEndpointOdbcParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlEndpointChannel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#dbsql_version SqlEndpoint#dbsql_version}
  */
  readonly dbsqlVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#name SqlEndpoint#name}
  */
  readonly name?: string;
}

export function sqlEndpointChannelToTerraform(struct?: SqlEndpointChannelOutputReference | SqlEndpointChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbsql_version: cdktf.stringToTerraform(struct!.dbsqlVersion),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sqlEndpointChannelToHclTerraform(struct?: SqlEndpointChannelOutputReference | SqlEndpointChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbsql_version: {
      value: cdktf.stringToHclTerraform(struct!.dbsqlVersion),
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

export class SqlEndpointChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlEndpointChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbsqlVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbsqlVersion = this._dbsqlVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlEndpointChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbsqlVersion = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbsqlVersion = value.dbsqlVersion;
      this._name = value.name;
    }
  }

  // dbsql_version - computed: false, optional: true, required: false
  private _dbsqlVersion?: string; 
  public get dbsqlVersion() {
    return this.getStringAttribute('dbsql_version');
  }
  public set dbsqlVersion(value: string) {
    this._dbsqlVersion = value;
  }
  public resetDbsqlVersion() {
    this._dbsqlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbsqlVersionInput() {
    return this._dbsqlVersion;
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
export interface SqlEndpointTagsCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#key SqlEndpoint#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#value SqlEndpoint#value}
  */
  readonly value: string;
}

export function sqlEndpointTagsCustomTagsToTerraform(struct?: SqlEndpointTagsCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sqlEndpointTagsCustomTagsToHclTerraform(struct?: SqlEndpointTagsCustomTags | cdktf.IResolvable): any {
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

export class SqlEndpointTagsCustomTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlEndpointTagsCustomTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: SqlEndpointTagsCustomTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SqlEndpointTagsCustomTagsList extends cdktf.ComplexList {
  public internalValue? : SqlEndpointTagsCustomTags[] | cdktf.IResolvable

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
  public get(index: number): SqlEndpointTagsCustomTagsOutputReference {
    return new SqlEndpointTagsCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlEndpointTags {
  /**
  * custom_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#custom_tags SqlEndpoint#custom_tags}
  */
  readonly customTags?: SqlEndpointTagsCustomTags[] | cdktf.IResolvable;
}

export function sqlEndpointTagsToTerraform(struct?: SqlEndpointTagsOutputReference | SqlEndpointTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_tags: cdktf.listMapper(sqlEndpointTagsCustomTagsToTerraform, true)(struct!.customTags),
  }
}


export function sqlEndpointTagsToHclTerraform(struct?: SqlEndpointTagsOutputReference | SqlEndpointTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_tags: {
      value: cdktf.listMapperHcl(sqlEndpointTagsCustomTagsToHclTerraform, true)(struct!.customTags),
      isBlock: true,
      type: "list",
      storageClassType: "SqlEndpointTagsCustomTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlEndpointTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlEndpointTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlEndpointTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customTags.internalValue = value.customTags;
    }
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags = new SqlEndpointTagsCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }
  public putCustomTags(value: SqlEndpointTagsCustomTags[] | cdktf.IResolvable) {
    this._customTags.internalValue = value;
  }
  public resetCustomTags() {
    this._customTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags.internalValue;
  }
}
export interface SqlEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#create SqlEndpoint#create}
  */
  readonly create?: string;
}

export function sqlEndpointTimeoutsToTerraform(struct?: SqlEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function sqlEndpointTimeoutsToHclTerraform(struct?: SqlEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SqlEndpointTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint databricks_sql_endpoint}
*/
export class SqlEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlEndpoint to import
  * @param importFromId The id of the existing SqlEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_sql_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/sql_endpoint databricks_sql_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: SqlEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_sql_endpoint',
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
    this._autoStopMins = config.autoStopMins;
    this._clusterSize = config.clusterSize;
    this._dataSourceId = config.dataSourceId;
    this._enablePhoton = config.enablePhoton;
    this._enableServerlessCompute = config.enableServerlessCompute;
    this._id = config.id;
    this._instanceProfileArn = config.instanceProfileArn;
    this._maxNumClusters = config.maxNumClusters;
    this._minNumClusters = config.minNumClusters;
    this._name = config.name;
    this._spotInstancePolicy = config.spotInstancePolicy;
    this._warehouseType = config.warehouseType;
    this._channel.internalValue = config.channel;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_stop_mins - computed: false, optional: true, required: false
  private _autoStopMins?: number; 
  public get autoStopMins() {
    return this.getNumberAttribute('auto_stop_mins');
  }
  public set autoStopMins(value: number) {
    this._autoStopMins = value;
  }
  public resetAutoStopMins() {
    this._autoStopMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStopMinsInput() {
    return this._autoStopMins;
  }

  // cluster_size - computed: false, optional: false, required: true
  private _clusterSize?: string; 
  public get clusterSize() {
    return this.getStringAttribute('cluster_size');
  }
  public set clusterSize(value: string) {
    this._clusterSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSizeInput() {
    return this._clusterSize;
  }

  // creator_name - computed: true, optional: false, required: false
  public get creatorName() {
    return this.getStringAttribute('creator_name');
  }

  // data_source_id - computed: true, optional: true, required: false
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  public resetDataSourceId() {
    this._dataSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // enable_photon - computed: false, optional: true, required: false
  private _enablePhoton?: boolean | cdktf.IResolvable; 
  public get enablePhoton() {
    return this.getBooleanAttribute('enable_photon');
  }
  public set enablePhoton(value: boolean | cdktf.IResolvable) {
    this._enablePhoton = value;
  }
  public resetEnablePhoton() {
    this._enablePhoton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePhotonInput() {
    return this._enablePhoton;
  }

  // enable_serverless_compute - computed: true, optional: true, required: false
  private _enableServerlessCompute?: boolean | cdktf.IResolvable; 
  public get enableServerlessCompute() {
    return this.getBooleanAttribute('enable_serverless_compute');
  }
  public set enableServerlessCompute(value: boolean | cdktf.IResolvable) {
    this._enableServerlessCompute = value;
  }
  public resetEnableServerlessCompute() {
    this._enableServerlessCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServerlessComputeInput() {
    return this._enableServerlessCompute;
  }

  // health - computed: true, optional: false, required: false
  private _health = new SqlEndpointHealthList(this, "health", false);
  public get health() {
    return this._health;
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

  // instance_profile_arn - computed: false, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // jdbc_url - computed: true, optional: false, required: false
  public get jdbcUrl() {
    return this.getStringAttribute('jdbc_url');
  }

  // max_num_clusters - computed: false, optional: true, required: false
  private _maxNumClusters?: number; 
  public get maxNumClusters() {
    return this.getNumberAttribute('max_num_clusters');
  }
  public set maxNumClusters(value: number) {
    this._maxNumClusters = value;
  }
  public resetMaxNumClusters() {
    this._maxNumClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumClustersInput() {
    return this._maxNumClusters;
  }

  // min_num_clusters - computed: false, optional: true, required: false
  private _minNumClusters?: number; 
  public get minNumClusters() {
    return this.getNumberAttribute('min_num_clusters');
  }
  public set minNumClusters(value: number) {
    this._minNumClusters = value;
  }
  public resetMinNumClusters() {
    this._minNumClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumClustersInput() {
    return this._minNumClusters;
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

  // num_active_sessions - computed: true, optional: false, required: false
  public get numActiveSessions() {
    return this.getNumberAttribute('num_active_sessions');
  }

  // num_clusters - computed: true, optional: false, required: false
  public get numClusters() {
    return this.getNumberAttribute('num_clusters');
  }

  // odbc_params - computed: true, optional: false, required: false
  private _odbcParams = new SqlEndpointOdbcParamsList(this, "odbc_params", false);
  public get odbcParams() {
    return this._odbcParams;
  }

  // spot_instance_policy - computed: false, optional: true, required: false
  private _spotInstancePolicy?: string; 
  public get spotInstancePolicy() {
    return this.getStringAttribute('spot_instance_policy');
  }
  public set spotInstancePolicy(value: string) {
    this._spotInstancePolicy = value;
  }
  public resetSpotInstancePolicy() {
    this._spotInstancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstancePolicyInput() {
    return this._spotInstancePolicy;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // warehouse_type - computed: false, optional: true, required: false
  private _warehouseType?: string; 
  public get warehouseType() {
    return this.getStringAttribute('warehouse_type');
  }
  public set warehouseType(value: string) {
    this._warehouseType = value;
  }
  public resetWarehouseType() {
    this._warehouseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseTypeInput() {
    return this._warehouseType;
  }

  // channel - computed: false, optional: true, required: false
  private _channel = new SqlEndpointChannelOutputReference(this, "channel");
  public get channel() {
    return this._channel;
  }
  public putChannel(value: SqlEndpointChannel) {
    this._channel.internalValue = value;
  }
  public resetChannel() {
    this._channel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new SqlEndpointTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: SqlEndpointTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SqlEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SqlEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_stop_mins: cdktf.numberToTerraform(this._autoStopMins),
      cluster_size: cdktf.stringToTerraform(this._clusterSize),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      enable_photon: cdktf.booleanToTerraform(this._enablePhoton),
      enable_serverless_compute: cdktf.booleanToTerraform(this._enableServerlessCompute),
      id: cdktf.stringToTerraform(this._id),
      instance_profile_arn: cdktf.stringToTerraform(this._instanceProfileArn),
      max_num_clusters: cdktf.numberToTerraform(this._maxNumClusters),
      min_num_clusters: cdktf.numberToTerraform(this._minNumClusters),
      name: cdktf.stringToTerraform(this._name),
      spot_instance_policy: cdktf.stringToTerraform(this._spotInstancePolicy),
      warehouse_type: cdktf.stringToTerraform(this._warehouseType),
      channel: sqlEndpointChannelToTerraform(this._channel.internalValue),
      tags: sqlEndpointTagsToTerraform(this._tags.internalValue),
      timeouts: sqlEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_stop_mins: {
        value: cdktf.numberToHclTerraform(this._autoStopMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_size: {
        value: cdktf.stringToHclTerraform(this._clusterSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_id: {
        value: cdktf.stringToHclTerraform(this._dataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_photon: {
        value: cdktf.booleanToHclTerraform(this._enablePhoton),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_serverless_compute: {
        value: cdktf.booleanToHclTerraform(this._enableServerlessCompute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_profile_arn: {
        value: cdktf.stringToHclTerraform(this._instanceProfileArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_num_clusters: {
        value: cdktf.numberToHclTerraform(this._maxNumClusters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_num_clusters: {
        value: cdktf.numberToHclTerraform(this._minNumClusters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot_instance_policy: {
        value: cdktf.stringToHclTerraform(this._spotInstancePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse_type: {
        value: cdktf.stringToHclTerraform(this._warehouseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel: {
        value: sqlEndpointChannelToHclTerraform(this._channel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlEndpointChannelList",
      },
      tags: {
        value: sqlEndpointTagsToHclTerraform(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlEndpointTagsList",
      },
      timeouts: {
        value: sqlEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SqlEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
