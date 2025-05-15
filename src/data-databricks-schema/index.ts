/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#id DataDatabricksSchema#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#name DataDatabricksSchema#name}
  */
  readonly name: string;
  /**
  * schema_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#schema_info DataDatabricksSchema#schema_info}
  */
  readonly schemaInfo?: DataDatabricksSchemaSchemaInfo;
}
export interface DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#inherited_from_name DataDatabricksSchema#inherited_from_name}
  */
  readonly inheritedFromName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#inherited_from_type DataDatabricksSchema#inherited_from_type}
  */
  readonly inheritedFromType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#value DataDatabricksSchema#value}
  */
  readonly value: string;
}

export function dataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagToTerraform(struct?: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference | DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag): any {
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


export function dataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagToHclTerraform(struct?: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference | DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag): any {
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

export class DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag | undefined {
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

  public set internalValue(value: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag | undefined) {
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
export interface DataDatabricksSchemaSchemaInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#browse_only DataDatabricksSchema#browse_only}
  */
  readonly browseOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#catalog_name DataDatabricksSchema#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#catalog_type DataDatabricksSchema#catalog_type}
  */
  readonly catalogType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#comment DataDatabricksSchema#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#created_at DataDatabricksSchema#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#created_by DataDatabricksSchema#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#enable_predictive_optimization DataDatabricksSchema#enable_predictive_optimization}
  */
  readonly enablePredictiveOptimization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#full_name DataDatabricksSchema#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#metastore_id DataDatabricksSchema#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#name DataDatabricksSchema#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#owner DataDatabricksSchema#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#properties DataDatabricksSchema#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#schema_id DataDatabricksSchema#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#storage_location DataDatabricksSchema#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#storage_root DataDatabricksSchema#storage_root}
  */
  readonly storageRoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#updated_at DataDatabricksSchema#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#updated_by DataDatabricksSchema#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * effective_predictive_optimization_flag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#effective_predictive_optimization_flag DataDatabricksSchema#effective_predictive_optimization_flag}
  */
  readonly effectivePredictiveOptimizationFlag?: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag;
}

export function dataDatabricksSchemaSchemaInfoToTerraform(struct?: DataDatabricksSchemaSchemaInfoOutputReference | DataDatabricksSchemaSchemaInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browse_only: cdktf.booleanToTerraform(struct!.browseOnly),
    catalog_name: cdktf.stringToTerraform(struct!.catalogName),
    catalog_type: cdktf.stringToTerraform(struct!.catalogType),
    comment: cdktf.stringToTerraform(struct!.comment),
    created_at: cdktf.numberToTerraform(struct!.createdAt),
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    enable_predictive_optimization: cdktf.stringToTerraform(struct!.enablePredictiveOptimization),
    full_name: cdktf.stringToTerraform(struct!.fullName),
    metastore_id: cdktf.stringToTerraform(struct!.metastoreId),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    schema_id: cdktf.stringToTerraform(struct!.schemaId),
    storage_location: cdktf.stringToTerraform(struct!.storageLocation),
    storage_root: cdktf.stringToTerraform(struct!.storageRoot),
    updated_at: cdktf.numberToTerraform(struct!.updatedAt),
    updated_by: cdktf.stringToTerraform(struct!.updatedBy),
    effective_predictive_optimization_flag: dataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagToTerraform(struct!.effectivePredictiveOptimizationFlag),
  }
}


export function dataDatabricksSchemaSchemaInfoToHclTerraform(struct?: DataDatabricksSchemaSchemaInfoOutputReference | DataDatabricksSchemaSchemaInfo): any {
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
    catalog_name: {
      value: cdktf.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    schema_id: {
      value: cdktf.stringToHclTerraform(struct!.schemaId),
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
      value: dataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagToHclTerraform(struct!.effectivePredictiveOptimizationFlag),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSchemaSchemaInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksSchemaSchemaInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browseOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.browseOnly = this._browseOnly;
    }
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._catalogType !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogType = this._catalogType;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
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
    if (this._metastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreId = this._metastoreId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSchemaSchemaInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._browseOnly = undefined;
      this._catalogName = undefined;
      this._catalogType = undefined;
      this._comment = undefined;
      this._createdAt = undefined;
      this._createdBy = undefined;
      this._enablePredictiveOptimization = undefined;
      this._fullName = undefined;
      this._metastoreId = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._properties = undefined;
      this._schemaId = undefined;
      this._storageLocation = undefined;
      this._storageRoot = undefined;
      this._updatedAt = undefined;
      this._updatedBy = undefined;
      this._effectivePredictiveOptimizationFlag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._browseOnly = value.browseOnly;
      this._catalogName = value.catalogName;
      this._catalogType = value.catalogType;
      this._comment = value.comment;
      this._createdAt = value.createdAt;
      this._createdBy = value.createdBy;
      this._enablePredictiveOptimization = value.enablePredictiveOptimization;
      this._fullName = value.fullName;
      this._metastoreId = value.metastoreId;
      this._name = value.name;
      this._owner = value.owner;
      this._properties = value.properties;
      this._schemaId = value.schemaId;
      this._storageLocation = value.storageLocation;
      this._storageRoot = value.storageRoot;
      this._updatedAt = value.updatedAt;
      this._updatedBy = value.updatedBy;
      this._effectivePredictiveOptimizationFlag.internalValue = value.effectivePredictiveOptimizationFlag;
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

  // catalog_name - computed: false, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
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

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
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
  private _effectivePredictiveOptimizationFlag = new DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference(this, "effective_predictive_optimization_flag");
  public get effectivePredictiveOptimizationFlag() {
    return this._effectivePredictiveOptimizationFlag;
  }
  public putEffectivePredictiveOptimizationFlag(value: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag) {
    this._effectivePredictiveOptimizationFlag.internalValue = value;
  }
  public resetEffectivePredictiveOptimizationFlag() {
    this._effectivePredictiveOptimizationFlag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectivePredictiveOptimizationFlagInput() {
    return this._effectivePredictiveOptimizationFlag.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema databricks_schema}
*/
export class DataDatabricksSchema extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksSchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksSchema to import
  * @param importFromId The id of the existing DataDatabricksSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksSchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/schema databricks_schema} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_schema',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.79.1',
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
    this._schemaInfo.internalValue = config.schemaInfo;
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

  // schema_info - computed: false, optional: true, required: false
  private _schemaInfo = new DataDatabricksSchemaSchemaInfoOutputReference(this, "schema_info");
  public get schemaInfo() {
    return this._schemaInfo;
  }
  public putSchemaInfo(value: DataDatabricksSchemaSchemaInfo) {
    this._schemaInfo.internalValue = value;
  }
  public resetSchemaInfo() {
    this._schemaInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInfoInput() {
    return this._schemaInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schema_info: dataDatabricksSchemaSchemaInfoToTerraform(this._schemaInfo.internalValue),
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
      schema_info: {
        value: dataDatabricksSchemaSchemaInfoToHclTerraform(this._schemaInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksSchemaSchemaInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
