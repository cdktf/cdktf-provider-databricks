/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#id DataDatabricksCatalog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}
  */
  readonly name: string;
  /**
  * catalog_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#catalog_info DataDatabricksCatalog#catalog_info}
  */
  readonly catalogInfo?: DataDatabricksCatalogCatalogInfo;
}
export interface DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#inherited_from_name DataDatabricksCatalog#inherited_from_name}
  */
  readonly inheritedFromName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#inherited_from_type DataDatabricksCatalog#inherited_from_type}
  */
  readonly inheritedFromType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#value DataDatabricksCatalog#value}
  */
  readonly value: string;
}

export function dataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagToTerraform(struct?: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference | DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inherited_from_name: cdktf.stringToTerraform(struct!.inheritedFromName),
    inherited_from_type: cdktf.stringToTerraform(struct!.inheritedFromType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagToHclTerraform(struct?: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference | DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inherited_from_name: {
      value: cdktf.stringToHclTerraform(struct!.inheritedFromName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inherited_from_type: {
      value: cdktf.stringToHclTerraform(struct!.inheritedFromType),
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

export class DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inheritedFromName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedFromName = this._inheritedFromName;
    }
    if (this._inheritedFromType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedFromType = this._inheritedFromType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inheritedFromName = undefined;
      this._inheritedFromType = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inheritedFromName = value.inheritedFromName;
      this._inheritedFromType = value.inheritedFromType;
      this._value = value.value;
    }
  }

  // inherited_from_name - computed: false, optional: true, required: false
  private _inheritedFromName?: string; 
  public get inheritedFromName() {
    return this.getStringAttribute('inherited_from_name');
  }
  public set inheritedFromName(value: string) {
    this._inheritedFromName = value;
  }
  public resetInheritedFromName() {
    this._inheritedFromName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedFromNameInput() {
    return this._inheritedFromName;
  }

  // inherited_from_type - computed: false, optional: true, required: false
  private _inheritedFromType?: string; 
  public get inheritedFromType() {
    return this.getStringAttribute('inherited_from_type');
  }
  public set inheritedFromType(value: string) {
    this._inheritedFromType = value;
  }
  public resetInheritedFromType() {
    this._inheritedFromType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedFromTypeInput() {
    return this._inheritedFromType;
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
export interface DataDatabricksCatalogCatalogInfoProvisioningInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#state DataDatabricksCatalog#state}
  */
  readonly state?: string;
}

export function dataDatabricksCatalogCatalogInfoProvisioningInfoToTerraform(struct?: DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference | DataDatabricksCatalogCatalogInfoProvisioningInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataDatabricksCatalogCatalogInfoProvisioningInfoToHclTerraform(struct?: DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference | DataDatabricksCatalogCatalogInfoProvisioningInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksCatalogCatalogInfoProvisioningInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCatalogCatalogInfoProvisioningInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface DataDatabricksCatalogCatalogInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#browse_only DataDatabricksCatalog#browse_only}
  */
  readonly browseOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#catalog_type DataDatabricksCatalog#catalog_type}
  */
  readonly catalogType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#comment DataDatabricksCatalog#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#connection_name DataDatabricksCatalog#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#created_at DataDatabricksCatalog#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#created_by DataDatabricksCatalog#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#enable_predictive_optimization DataDatabricksCatalog#enable_predictive_optimization}
  */
  readonly enablePredictiveOptimization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#full_name DataDatabricksCatalog#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#isolation_mode DataDatabricksCatalog#isolation_mode}
  */
  readonly isolationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#metastore_id DataDatabricksCatalog#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#options DataDatabricksCatalog#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#owner DataDatabricksCatalog#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#properties DataDatabricksCatalog#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#provider_name DataDatabricksCatalog#provider_name}
  */
  readonly providerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#securable_type DataDatabricksCatalog#securable_type}
  */
  readonly securableType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#share_name DataDatabricksCatalog#share_name}
  */
  readonly shareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#storage_location DataDatabricksCatalog#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#storage_root DataDatabricksCatalog#storage_root}
  */
  readonly storageRoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#updated_at DataDatabricksCatalog#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#updated_by DataDatabricksCatalog#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * effective_predictive_optimization_flag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#effective_predictive_optimization_flag DataDatabricksCatalog#effective_predictive_optimization_flag}
  */
  readonly effectivePredictiveOptimizationFlag?: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag;
  /**
  * provisioning_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#provisioning_info DataDatabricksCatalog#provisioning_info}
  */
  readonly provisioningInfo?: DataDatabricksCatalogCatalogInfoProvisioningInfo;
}

export function dataDatabricksCatalogCatalogInfoToTerraform(struct?: DataDatabricksCatalogCatalogInfoOutputReference | DataDatabricksCatalogCatalogInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browse_only: cdktf.booleanToTerraform(struct!.browseOnly),
    catalog_type: cdktf.stringToTerraform(struct!.catalogType),
    comment: cdktf.stringToTerraform(struct!.comment),
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    created_at: cdktf.numberToTerraform(struct!.createdAt),
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    enable_predictive_optimization: cdktf.stringToTerraform(struct!.enablePredictiveOptimization),
    full_name: cdktf.stringToTerraform(struct!.fullName),
    isolation_mode: cdktf.stringToTerraform(struct!.isolationMode),
    metastore_id: cdktf.stringToTerraform(struct!.metastoreId),
    name: cdktf.stringToTerraform(struct!.name),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    owner: cdktf.stringToTerraform(struct!.owner),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    provider_name: cdktf.stringToTerraform(struct!.providerName),
    securable_type: cdktf.stringToTerraform(struct!.securableType),
    share_name: cdktf.stringToTerraform(struct!.shareName),
    storage_location: cdktf.stringToTerraform(struct!.storageLocation),
    storage_root: cdktf.stringToTerraform(struct!.storageRoot),
    updated_at: cdktf.numberToTerraform(struct!.updatedAt),
    updated_by: cdktf.stringToTerraform(struct!.updatedBy),
    effective_predictive_optimization_flag: dataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagToTerraform(struct!.effectivePredictiveOptimizationFlag),
    provisioning_info: dataDatabricksCatalogCatalogInfoProvisioningInfoToTerraform(struct!.provisioningInfo),
  }
}


export function dataDatabricksCatalogCatalogInfoToHclTerraform(struct?: DataDatabricksCatalogCatalogInfoOutputReference | DataDatabricksCatalogCatalogInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    browse_only: {
      value: cdktf.booleanToHclTerraform(struct!.browseOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    catalog_type: {
      value: cdktf.stringToHclTerraform(struct!.catalogType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_at: {
      value: cdktf.numberToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_predictive_optimization: {
      value: cdktf.stringToHclTerraform(struct!.enablePredictiveOptimization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_name: {
      value: cdktf.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isolation_mode: {
      value: cdktf.stringToHclTerraform(struct!.isolationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metastore_id: {
      value: cdktf.stringToHclTerraform(struct!.metastoreId),
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
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provider_name: {
      value: cdktf.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    securable_type: {
      value: cdktf.stringToHclTerraform(struct!.securableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_name: {
      value: cdktf.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_location: {
      value: cdktf.stringToHclTerraform(struct!.storageLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_root: {
      value: cdktf.stringToHclTerraform(struct!.storageRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.numberToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    updated_by: {
      value: cdktf.stringToHclTerraform(struct!.updatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_predictive_optimization_flag: {
      value: dataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagToHclTerraform(struct!.effectivePredictiveOptimizationFlag),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagList",
    },
    provisioning_info: {
      value: dataDatabricksCatalogCatalogInfoProvisioningInfoToHclTerraform(struct!.provisioningInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksCatalogCatalogInfoProvisioningInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksCatalogCatalogInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksCatalogCatalogInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browseOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.browseOnly = this._browseOnly;
    }
    if (this._catalogType !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogType = this._catalogType;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._enablePredictiveOptimization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePredictiveOptimization = this._enablePredictiveOptimization;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._isolationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolationMode = this._isolationMode;
    }
    if (this._metastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreId = this._metastoreId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    if (this._securableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.securableType = this._securableType;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    if (this._storageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocation = this._storageLocation;
    }
    if (this._storageRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageRoot = this._storageRoot;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    if (this._effectivePredictiveOptimizationFlag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectivePredictiveOptimizationFlag = this._effectivePredictiveOptimizationFlag?.internalValue;
    }
    if (this._provisioningInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningInfo = this._provisioningInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksCatalogCatalogInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._browseOnly = undefined;
      this._catalogType = undefined;
      this._comment = undefined;
      this._connectionName = undefined;
      this._createdAt = undefined;
      this._createdBy = undefined;
      this._enablePredictiveOptimization = undefined;
      this._fullName = undefined;
      this._isolationMode = undefined;
      this._metastoreId = undefined;
      this._name = undefined;
      this._options = undefined;
      this._owner = undefined;
      this._properties = undefined;
      this._providerName = undefined;
      this._securableType = undefined;
      this._shareName = undefined;
      this._storageLocation = undefined;
      this._storageRoot = undefined;
      this._updatedAt = undefined;
      this._updatedBy = undefined;
      this._effectivePredictiveOptimizationFlag.internalValue = undefined;
      this._provisioningInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._browseOnly = value.browseOnly;
      this._catalogType = value.catalogType;
      this._comment = value.comment;
      this._connectionName = value.connectionName;
      this._createdAt = value.createdAt;
      this._createdBy = value.createdBy;
      this._enablePredictiveOptimization = value.enablePredictiveOptimization;
      this._fullName = value.fullName;
      this._isolationMode = value.isolationMode;
      this._metastoreId = value.metastoreId;
      this._name = value.name;
      this._options = value.options;
      this._owner = value.owner;
      this._properties = value.properties;
      this._providerName = value.providerName;
      this._securableType = value.securableType;
      this._shareName = value.shareName;
      this._storageLocation = value.storageLocation;
      this._storageRoot = value.storageRoot;
      this._updatedAt = value.updatedAt;
      this._updatedBy = value.updatedBy;
      this._effectivePredictiveOptimizationFlag.internalValue = value.effectivePredictiveOptimizationFlag;
      this._provisioningInfo.internalValue = value.provisioningInfo;
    }
  }

  // browse_only - computed: false, optional: true, required: false
  private _browseOnly?: boolean | cdktf.IResolvable; 
  public get browseOnly() {
    return this.getBooleanAttribute('browse_only');
  }
  public set browseOnly(value: boolean | cdktf.IResolvable) {
    this._browseOnly = value;
  }
  public resetBrowseOnly() {
    this._browseOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browseOnlyInput() {
    return this._browseOnly;
  }

  // catalog_type - computed: false, optional: true, required: false
  private _catalogType?: string; 
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }
  public set catalogType(value: string) {
    this._catalogType = value;
  }
  public resetCatalogType() {
    this._catalogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType;
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

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // enable_predictive_optimization - computed: false, optional: true, required: false
  private _enablePredictiveOptimization?: string; 
  public get enablePredictiveOptimization() {
    return this.getStringAttribute('enable_predictive_optimization');
  }
  public set enablePredictiveOptimization(value: string) {
    this._enablePredictiveOptimization = value;
  }
  public resetEnablePredictiveOptimization() {
    this._enablePredictiveOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePredictiveOptimizationInput() {
    return this._enablePredictiveOptimization;
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

  // isolation_mode - computed: false, optional: true, required: false
  private _isolationMode?: string; 
  public get isolationMode() {
    return this.getStringAttribute('isolation_mode');
  }
  public set isolationMode(value: string) {
    this._isolationMode = value;
  }
  public resetIsolationMode() {
    this._isolationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationModeInput() {
    return this._isolationMode;
  }

  // metastore_id - computed: false, optional: true, required: false
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
  }
  public resetMetastoreId() {
    this._metastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreIdInput() {
    return this._metastoreId;
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
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

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // provider_name - computed: false, optional: true, required: false
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  public resetProviderName() {
    this._providerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // securable_type - computed: false, optional: true, required: false
  private _securableType?: string; 
  public get securableType() {
    return this.getStringAttribute('securable_type');
  }
  public set securableType(value: string) {
    this._securableType = value;
  }
  public resetSecurableType() {
    this._securableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securableTypeInput() {
    return this._securableType;
  }

  // share_name - computed: false, optional: true, required: false
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  public resetShareName() {
    this._shareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
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

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // updated_by - computed: false, optional: true, required: false
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }

  // effective_predictive_optimization_flag - computed: false, optional: true, required: false
  private _effectivePredictiveOptimizationFlag = new DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference(this, "effective_predictive_optimization_flag");
  public get effectivePredictiveOptimizationFlag() {
    return this._effectivePredictiveOptimizationFlag;
  }
  public putEffectivePredictiveOptimizationFlag(value: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag) {
    this._effectivePredictiveOptimizationFlag.internalValue = value;
  }
  public resetEffectivePredictiveOptimizationFlag() {
    this._effectivePredictiveOptimizationFlag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectivePredictiveOptimizationFlagInput() {
    return this._effectivePredictiveOptimizationFlag.internalValue;
  }

  // provisioning_info - computed: false, optional: true, required: false
  private _provisioningInfo = new DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference(this, "provisioning_info");
  public get provisioningInfo() {
    return this._provisioningInfo;
  }
  public putProvisioningInfo(value: DataDatabricksCatalogCatalogInfoProvisioningInfo) {
    this._provisioningInfo.internalValue = value;
  }
  public resetProvisioningInfo() {
    this._provisioningInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningInfoInput() {
    return this._provisioningInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog databricks_catalog}
*/
export class DataDatabricksCatalog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksCatalog to import
  * @param importFromId The id of the existing DataDatabricksCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/catalog databricks_catalog} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_catalog',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.75.0',
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
    this._id = config.id;
    this._name = config.name;
    this._catalogInfo.internalValue = config.catalogInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // catalog_info - computed: false, optional: true, required: false
  private _catalogInfo = new DataDatabricksCatalogCatalogInfoOutputReference(this, "catalog_info");
  public get catalogInfo() {
    return this._catalogInfo;
  }
  public putCatalogInfo(value: DataDatabricksCatalogCatalogInfo) {
    this._catalogInfo.internalValue = value;
  }
  public resetCatalogInfo() {
    this._catalogInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInfoInput() {
    return this._catalogInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      catalog_info: dataDatabricksCatalogCatalogInfoToTerraform(this._catalogInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      catalog_info: {
        value: dataDatabricksCatalogCatalogInfoToHclTerraform(this._catalogInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksCatalogCatalogInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
