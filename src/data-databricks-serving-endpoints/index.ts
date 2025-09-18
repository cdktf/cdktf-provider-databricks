/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksServingEndpointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#endpoints DataDatabricksServingEndpoints#endpoints}
  */
  readonly endpoints?: DataDatabricksServingEndpointsEndpoints[] | cdktf.IResolvable;
}
export interface DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#enabled DataDatabricksServingEndpoints#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfigToTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfigToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfigList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfig[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfigOutputReference {
    return new DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#behavior DataDatabricksServingEndpoints#behavior}
  */
  readonly behavior?: string;
}

export function dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiToTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}


export function dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
    }
  }

  // behavior - computed: true, optional: true, required: false
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference {
    return new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#invalid_keywords DataDatabricksServingEndpoints#invalid_keywords}
  */
  readonly invalidKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#pii DataDatabricksServingEndpoints#pii}
  */
  readonly pii?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#safety DataDatabricksServingEndpoints#safety}
  */
  readonly safety?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#valid_topics DataDatabricksServingEndpoints#valid_topics}
  */
  readonly validTopics?: string[];
}

export function dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputToTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.invalidKeywords),
    pii: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiToTerraform, false)(struct!.pii),
    safety: cdktf.booleanToTerraform(struct!.safety),
    valid_topics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validTopics),
  }
}


export function dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invalid_keywords: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.invalidKeywords),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pii: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiToHclTerraform, false)(struct!.pii),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList",
    },
    safety: {
      value: cdktf.booleanToHclTerraform(struct!.safety),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_topics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.validTopics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidKeywords = this._invalidKeywords;
    }
    if (this._pii?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pii = this._pii?.internalValue;
    }
    if (this._safety !== undefined) {
      hasAnyValues = true;
      internalValueResult.safety = this._safety;
    }
    if (this._validTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.validTopics = this._validTopics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invalidKeywords = undefined;
      this._pii.internalValue = undefined;
      this._safety = undefined;
      this._validTopics = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invalidKeywords = value.invalidKeywords;
      this._pii.internalValue = value.pii;
      this._safety = value.safety;
      this._validTopics = value.validTopics;
    }
  }

  // invalid_keywords - computed: true, optional: true, required: false
  private _invalidKeywords?: string[]; 
  public get invalidKeywords() {
    return this.getListAttribute('invalid_keywords');
  }
  public set invalidKeywords(value: string[]) {
    this._invalidKeywords = value;
  }
  public resetInvalidKeywords() {
    this._invalidKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidKeywordsInput() {
    return this._invalidKeywords;
  }

  // pii - computed: true, optional: true, required: false
  private _pii = new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList(this, "pii", false);
  public get pii() {
    return this._pii;
  }
  public putPii(value: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii[] | cdktf.IResolvable) {
    this._pii.internalValue = value;
  }
  public resetPii() {
    this._pii.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiInput() {
    return this._pii.internalValue;
  }

  // safety - computed: true, optional: true, required: false
  private _safety?: boolean | cdktf.IResolvable; 
  public get safety() {
    return this.getBooleanAttribute('safety');
  }
  public set safety(value: boolean | cdktf.IResolvable) {
    this._safety = value;
  }
  public resetSafety() {
    this._safety = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safetyInput() {
    return this._safety;
  }

  // valid_topics - computed: true, optional: true, required: false
  private _validTopics?: string[]; 
  public get validTopics() {
    return this.getListAttribute('valid_topics');
  }
  public set validTopics(value: string[]) {
    this._validTopics = value;
  }
  public resetValidTopics() {
    this._validTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validTopicsInput() {
    return this._validTopics;
  }
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference {
    return new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#behavior DataDatabricksServingEndpoints#behavior}
  */
  readonly behavior?: string;
}

export function dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiToTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}


export function dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
    }
  }

  // behavior - computed: true, optional: true, required: false
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference {
    return new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#invalid_keywords DataDatabricksServingEndpoints#invalid_keywords}
  */
  readonly invalidKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#pii DataDatabricksServingEndpoints#pii}
  */
  readonly pii?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#safety DataDatabricksServingEndpoints#safety}
  */
  readonly safety?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#valid_topics DataDatabricksServingEndpoints#valid_topics}
  */
  readonly validTopics?: string[];
}

export function dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputToTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.invalidKeywords),
    pii: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiToTerraform, false)(struct!.pii),
    safety: cdktf.booleanToTerraform(struct!.safety),
    valid_topics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validTopics),
  }
}


export function dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invalid_keywords: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.invalidKeywords),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pii: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiToHclTerraform, false)(struct!.pii),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList",
    },
    safety: {
      value: cdktf.booleanToHclTerraform(struct!.safety),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_topics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.validTopics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidKeywords = this._invalidKeywords;
    }
    if (this._pii?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pii = this._pii?.internalValue;
    }
    if (this._safety !== undefined) {
      hasAnyValues = true;
      internalValueResult.safety = this._safety;
    }
    if (this._validTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.validTopics = this._validTopics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invalidKeywords = undefined;
      this._pii.internalValue = undefined;
      this._safety = undefined;
      this._validTopics = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invalidKeywords = value.invalidKeywords;
      this._pii.internalValue = value.pii;
      this._safety = value.safety;
      this._validTopics = value.validTopics;
    }
  }

  // invalid_keywords - computed: true, optional: true, required: false
  private _invalidKeywords?: string[]; 
  public get invalidKeywords() {
    return this.getListAttribute('invalid_keywords');
  }
  public set invalidKeywords(value: string[]) {
    this._invalidKeywords = value;
  }
  public resetInvalidKeywords() {
    this._invalidKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidKeywordsInput() {
    return this._invalidKeywords;
  }

  // pii - computed: true, optional: true, required: false
  private _pii = new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList(this, "pii", false);
  public get pii() {
    return this._pii;
  }
  public putPii(value: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii[] | cdktf.IResolvable) {
    this._pii.internalValue = value;
  }
  public resetPii() {
    this._pii.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiInput() {
    return this._pii.internalValue;
  }

  // safety - computed: true, optional: true, required: false
  private _safety?: boolean | cdktf.IResolvable; 
  public get safety() {
    return this.getBooleanAttribute('safety');
  }
  public set safety(value: boolean | cdktf.IResolvable) {
    this._safety = value;
  }
  public resetSafety() {
    this._safety = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safetyInput() {
    return this._safety;
  }

  // valid_topics - computed: true, optional: true, required: false
  private _validTopics?: string[]; 
  public get validTopics() {
    return this.getListAttribute('valid_topics');
  }
  public set validTopics(value: string[]) {
    this._validTopics = value;
  }
  public resetValidTopics() {
    this._validTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validTopicsInput() {
    return this._validTopics;
  }
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference {
    return new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#input DataDatabricksServingEndpoints#input}
  */
  readonly input?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#output DataDatabricksServingEndpoints#output}
  */
  readonly output?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput[] | cdktf.IResolvable;
}

export function dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsToTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputToTerraform, false)(struct!.input),
    output: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputToTerraform, false)(struct!.output),
  }
}


export function dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputToHclTerraform, false)(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList",
    },
    output: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputToHclTerraform, false)(struct!.output),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input.internalValue = undefined;
      this._output.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input.internalValue = value.input;
      this._output.internalValue = value.output;
    }
  }

  // input - computed: true, optional: true, required: false
  private _input = new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList(this, "input", false);
  public get input() {
    return this._input;
  }
  public putInput(value: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput[] | cdktf.IResolvable) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // output - computed: true, optional: true, required: false
  private _output = new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList(this, "output", false);
  public get output() {
    return this._output;
  }
  public putOutput(value: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput[] | cdktf.IResolvable) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference {
    return new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#catalog_name DataDatabricksServingEndpoints#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#enabled DataDatabricksServingEndpoints#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#schema_name DataDatabricksServingEndpoints#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#table_name_prefix DataDatabricksServingEndpoints#table_name_prefix}
  */
  readonly tableNamePrefix?: string;
}

export function dataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigToTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_name: cdktf.stringToTerraform(struct!.catalogName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    table_name_prefix: cdktf.stringToTerraform(struct!.tableNamePrefix),
  }
}


export function dataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_name: {
      value: cdktf.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.tableNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNamePrefix = this._tableNamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogName = undefined;
      this._enabled = undefined;
      this._schemaName = undefined;
      this._tableNamePrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogName = value.catalogName;
      this._enabled = value.enabled;
      this._schemaName = value.schemaName;
      this._tableNamePrefix = value.tableNamePrefix;
    }
  }

  // catalog_name - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // schema_name - computed: true, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // table_name_prefix - computed: true, optional: true, required: false
  private _tableNamePrefix?: string; 
  public get tableNamePrefix() {
    return this.getStringAttribute('table_name_prefix');
  }
  public set tableNamePrefix(value: string) {
    this._tableNamePrefix = value;
  }
  public resetTableNamePrefix() {
    this._tableNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamePrefixInput() {
    return this._tableNamePrefix;
  }
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference {
    return new DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#calls DataDatabricksServingEndpoints#calls}
  */
  readonly calls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#key DataDatabricksServingEndpoints#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#principal DataDatabricksServingEndpoints#principal}
  */
  readonly principal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#renewal_period DataDatabricksServingEndpoints#renewal_period}
  */
  readonly renewalPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#tokens DataDatabricksServingEndpoints#tokens}
  */
  readonly tokens?: number;
}

export function dataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsToTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calls: cdktf.numberToTerraform(struct!.calls),
    key: cdktf.stringToTerraform(struct!.key),
    principal: cdktf.stringToTerraform(struct!.principal),
    renewal_period: cdktf.stringToTerraform(struct!.renewalPeriod),
    tokens: cdktf.numberToTerraform(struct!.tokens),
  }
}


export function dataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calls: {
      value: cdktf.numberToHclTerraform(struct!.calls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renewal_period: {
      value: cdktf.stringToHclTerraform(struct!.renewalPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.numberToHclTerraform(struct!.tokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calls !== undefined) {
      hasAnyValues = true;
      internalValueResult.calls = this._calls;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._renewalPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewalPeriod = this._renewalPeriod;
    }
    if (this._tokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calls = undefined;
      this._key = undefined;
      this._principal = undefined;
      this._renewalPeriod = undefined;
      this._tokens = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calls = value.calls;
      this._key = value.key;
      this._principal = value.principal;
      this._renewalPeriod = value.renewalPeriod;
      this._tokens = value.tokens;
    }
  }

  // calls - computed: true, optional: true, required: false
  private _calls?: number; 
  public get calls() {
    return this.getNumberAttribute('calls');
  }
  public set calls(value: number) {
    this._calls = value;
  }
  public resetCalls() {
    this._calls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callsInput() {
    return this._calls;
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

  // principal - computed: true, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // renewal_period - computed: true, optional: false, required: true
  private _renewalPeriod?: string; 
  public get renewalPeriod() {
    return this.getStringAttribute('renewal_period');
  }
  public set renewalPeriod(value: string) {
    this._renewalPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalPeriodInput() {
    return this._renewalPeriod;
  }

  // tokens - computed: true, optional: true, required: false
  private _tokens?: number; 
  public get tokens() {
    return this.getNumberAttribute('tokens');
  }
  public set tokens(value: number) {
    this._tokens = value;
  }
  public resetTokens() {
    this._tokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens;
  }
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference {
    return new DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#enabled DataDatabricksServingEndpoints#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigToTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference {
    return new DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsAiGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#fallback_config DataDatabricksServingEndpoints#fallback_config}
  */
  readonly fallbackConfig?: DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#guardrails DataDatabricksServingEndpoints#guardrails}
  */
  readonly guardrails?: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#inference_table_config DataDatabricksServingEndpoints#inference_table_config}
  */
  readonly inferenceTableConfig?: DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#rate_limits DataDatabricksServingEndpoints#rate_limits}
  */
  readonly rateLimits?: DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#usage_tracking_config DataDatabricksServingEndpoints#usage_tracking_config}
  */
  readonly usageTrackingConfig?: DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig[] | cdktf.IResolvable;
}

export function dataDatabricksServingEndpointsEndpointsAiGatewayToTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_config: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfigToTerraform, false)(struct!.fallbackConfig),
    guardrails: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsToTerraform, false)(struct!.guardrails),
    inference_table_config: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigToTerraform, false)(struct!.inferenceTableConfig),
    rate_limits: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsToTerraform, false)(struct!.rateLimits),
    usage_tracking_config: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigToTerraform, false)(struct!.usageTrackingConfig),
  }
}


export function dataDatabricksServingEndpointsEndpointsAiGatewayToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsAiGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_config: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfigToHclTerraform, false)(struct!.fallbackConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfigList",
    },
    guardrails: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsToHclTerraform, false)(struct!.guardrails),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList",
    },
    inference_table_config: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigToHclTerraform, false)(struct!.inferenceTableConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList",
    },
    rate_limits: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsToHclTerraform, false)(struct!.rateLimits),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList",
    },
    usage_tracking_config: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigToHclTerraform, false)(struct!.usageTrackingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsAiGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackConfig = this._fallbackConfig?.internalValue;
    }
    if (this._guardrails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrails = this._guardrails?.internalValue;
    }
    if (this._inferenceTableConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceTableConfig = this._inferenceTableConfig?.internalValue;
    }
    if (this._rateLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimits = this._rateLimits?.internalValue;
    }
    if (this._usageTrackingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageTrackingConfig = this._usageTrackingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsAiGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackConfig.internalValue = undefined;
      this._guardrails.internalValue = undefined;
      this._inferenceTableConfig.internalValue = undefined;
      this._rateLimits.internalValue = undefined;
      this._usageTrackingConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackConfig.internalValue = value.fallbackConfig;
      this._guardrails.internalValue = value.guardrails;
      this._inferenceTableConfig.internalValue = value.inferenceTableConfig;
      this._rateLimits.internalValue = value.rateLimits;
      this._usageTrackingConfig.internalValue = value.usageTrackingConfig;
    }
  }

  // fallback_config - computed: true, optional: true, required: false
  private _fallbackConfig = new DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfigList(this, "fallback_config", false);
  public get fallbackConfig() {
    return this._fallbackConfig;
  }
  public putFallbackConfig(value: DataDatabricksServingEndpointsEndpointsAiGatewayFallbackConfig[] | cdktf.IResolvable) {
    this._fallbackConfig.internalValue = value;
  }
  public resetFallbackConfig() {
    this._fallbackConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackConfigInput() {
    return this._fallbackConfig.internalValue;
  }

  // guardrails - computed: true, optional: true, required: false
  private _guardrails = new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList(this, "guardrails", false);
  public get guardrails() {
    return this._guardrails;
  }
  public putGuardrails(value: DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails[] | cdktf.IResolvable) {
    this._guardrails.internalValue = value;
  }
  public resetGuardrails() {
    this._guardrails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailsInput() {
    return this._guardrails.internalValue;
  }

  // inference_table_config - computed: true, optional: true, required: false
  private _inferenceTableConfig = new DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList(this, "inference_table_config", false);
  public get inferenceTableConfig() {
    return this._inferenceTableConfig;
  }
  public putInferenceTableConfig(value: DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig[] | cdktf.IResolvable) {
    this._inferenceTableConfig.internalValue = value;
  }
  public resetInferenceTableConfig() {
    this._inferenceTableConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceTableConfigInput() {
    return this._inferenceTableConfig.internalValue;
  }

  // rate_limits - computed: true, optional: true, required: false
  private _rateLimits = new DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList(this, "rate_limits", false);
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits[] | cdktf.IResolvable) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }

  // usage_tracking_config - computed: true, optional: true, required: false
  private _usageTrackingConfig = new DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList(this, "usage_tracking_config", false);
  public get usageTrackingConfig() {
    return this._usageTrackingConfig;
  }
  public putUsageTrackingConfig(value: DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig[] | cdktf.IResolvable) {
    this._usageTrackingConfig.internalValue = value;
  }
  public resetUsageTrackingConfig() {
    this._usageTrackingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageTrackingConfigInput() {
    return this._usageTrackingConfig.internalValue;
  }
}

export class DataDatabricksServingEndpointsEndpointsAiGatewayList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsAiGateway[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference {
    return new DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#ai21labs_api_key DataDatabricksServingEndpoints#ai21labs_api_key}
  */
  readonly ai21LabsApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#ai21labs_api_key_plaintext DataDatabricksServingEndpoints#ai21labs_api_key_plaintext}
  */
  readonly ai21LabsApiKeyPlaintext?: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai21labs_api_key: cdktf.stringToTerraform(struct!.ai21LabsApiKey),
    ai21labs_api_key_plaintext: cdktf.stringToTerraform(struct!.ai21LabsApiKeyPlaintext),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai21labs_api_key: {
      value: cdktf.stringToHclTerraform(struct!.ai21LabsApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ai21labs_api_key_plaintext: {
      value: cdktf.stringToHclTerraform(struct!.ai21LabsApiKeyPlaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ai21LabsApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ai21LabsApiKey = this._ai21LabsApiKey;
    }
    if (this._ai21LabsApiKeyPlaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.ai21LabsApiKeyPlaintext = this._ai21LabsApiKeyPlaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ai21LabsApiKey = undefined;
      this._ai21LabsApiKeyPlaintext = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ai21LabsApiKey = value.ai21LabsApiKey;
      this._ai21LabsApiKeyPlaintext = value.ai21LabsApiKeyPlaintext;
    }
  }

  // ai21labs_api_key - computed: true, optional: true, required: false
  private _ai21LabsApiKey?: string; 
  public get ai21LabsApiKey() {
    return this.getStringAttribute('ai21labs_api_key');
  }
  public set ai21LabsApiKey(value: string) {
    this._ai21LabsApiKey = value;
  }
  public resetAi21LabsApiKey() {
    this._ai21LabsApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ai21LabsApiKeyInput() {
    return this._ai21LabsApiKey;
  }

  // ai21labs_api_key_plaintext - computed: true, optional: true, required: false
  private _ai21LabsApiKeyPlaintext?: string; 
  public get ai21LabsApiKeyPlaintext() {
    return this.getStringAttribute('ai21labs_api_key_plaintext');
  }
  public set ai21LabsApiKeyPlaintext(value: string) {
    this._ai21LabsApiKeyPlaintext = value;
  }
  public resetAi21LabsApiKeyPlaintext() {
    this._ai21LabsApiKeyPlaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ai21LabsApiKeyPlaintextInput() {
    return this._ai21LabsApiKeyPlaintext;
  }
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#aws_access_key_id DataDatabricksServingEndpoints#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#aws_access_key_id_plaintext DataDatabricksServingEndpoints#aws_access_key_id_plaintext}
  */
  readonly awsAccessKeyIdPlaintext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#aws_region DataDatabricksServingEndpoints#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#aws_secret_access_key DataDatabricksServingEndpoints#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#aws_secret_access_key_plaintext DataDatabricksServingEndpoints#aws_secret_access_key_plaintext}
  */
  readonly awsSecretAccessKeyPlaintext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#bedrock_provider DataDatabricksServingEndpoints#bedrock_provider}
  */
  readonly bedrockProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#instance_profile_arn DataDatabricksServingEndpoints#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_access_key_id_plaintext: cdktf.stringToTerraform(struct!.awsAccessKeyIdPlaintext),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
    aws_secret_access_key_plaintext: cdktf.stringToTerraform(struct!.awsSecretAccessKeyPlaintext),
    bedrock_provider: cdktf.stringToTerraform(struct!.bedrockProvider),
    instance_profile_arn: cdktf.stringToTerraform(struct!.instanceProfileArn),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_access_key_id_plaintext: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyIdPlaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key_plaintext: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKeyPlaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bedrock_provider: {
      value: cdktf.stringToHclTerraform(struct!.bedrockProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_profile_arn: {
      value: cdktf.stringToHclTerraform(struct!.instanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsAccessKeyIdPlaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyIdPlaintext = this._awsAccessKeyIdPlaintext;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    if (this._awsSecretAccessKeyPlaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKeyPlaintext = this._awsSecretAccessKeyPlaintext;
    }
    if (this._bedrockProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockProvider = this._bedrockProvider;
    }
    if (this._instanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileArn = this._instanceProfileArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = undefined;
      this._awsAccessKeyIdPlaintext = undefined;
      this._awsRegion = undefined;
      this._awsSecretAccessKey = undefined;
      this._awsSecretAccessKeyPlaintext = undefined;
      this._bedrockProvider = undefined;
      this._instanceProfileArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsAccessKeyIdPlaintext = value.awsAccessKeyIdPlaintext;
      this._awsRegion = value.awsRegion;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
      this._awsSecretAccessKeyPlaintext = value.awsSecretAccessKeyPlaintext;
      this._bedrockProvider = value.bedrockProvider;
      this._instanceProfileArn = value.instanceProfileArn;
    }
  }

  // aws_access_key_id - computed: true, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_access_key_id_plaintext - computed: true, optional: true, required: false
  private _awsAccessKeyIdPlaintext?: string; 
  public get awsAccessKeyIdPlaintext() {
    return this.getStringAttribute('aws_access_key_id_plaintext');
  }
  public set awsAccessKeyIdPlaintext(value: string) {
    this._awsAccessKeyIdPlaintext = value;
  }
  public resetAwsAccessKeyIdPlaintext() {
    this._awsAccessKeyIdPlaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdPlaintextInput() {
    return this._awsAccessKeyIdPlaintext;
  }

  // aws_region - computed: true, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_secret_access_key - computed: true, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // aws_secret_access_key_plaintext - computed: true, optional: true, required: false
  private _awsSecretAccessKeyPlaintext?: string; 
  public get awsSecretAccessKeyPlaintext() {
    return this.getStringAttribute('aws_secret_access_key_plaintext');
  }
  public set awsSecretAccessKeyPlaintext(value: string) {
    this._awsSecretAccessKeyPlaintext = value;
  }
  public resetAwsSecretAccessKeyPlaintext() {
    this._awsSecretAccessKeyPlaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyPlaintextInput() {
    return this._awsSecretAccessKeyPlaintext;
  }

  // bedrock_provider - computed: true, optional: false, required: true
  private _bedrockProvider?: string; 
  public get bedrockProvider() {
    return this.getStringAttribute('bedrock_provider');
  }
  public set bedrockProvider(value: string) {
    this._bedrockProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockProviderInput() {
    return this._bedrockProvider;
  }

  // instance_profile_arn - computed: true, optional: true, required: false
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
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#anthropic_api_key DataDatabricksServingEndpoints#anthropic_api_key}
  */
  readonly anthropicApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#anthropic_api_key_plaintext DataDatabricksServingEndpoints#anthropic_api_key_plaintext}
  */
  readonly anthropicApiKeyPlaintext?: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anthropic_api_key: cdktf.stringToTerraform(struct!.anthropicApiKey),
    anthropic_api_key_plaintext: cdktf.stringToTerraform(struct!.anthropicApiKeyPlaintext),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anthropic_api_key: {
      value: cdktf.stringToHclTerraform(struct!.anthropicApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anthropic_api_key_plaintext: {
      value: cdktf.stringToHclTerraform(struct!.anthropicApiKeyPlaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anthropicApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthropicApiKey = this._anthropicApiKey;
    }
    if (this._anthropicApiKeyPlaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthropicApiKeyPlaintext = this._anthropicApiKeyPlaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anthropicApiKey = undefined;
      this._anthropicApiKeyPlaintext = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anthropicApiKey = value.anthropicApiKey;
      this._anthropicApiKeyPlaintext = value.anthropicApiKeyPlaintext;
    }
  }

  // anthropic_api_key - computed: true, optional: true, required: false
  private _anthropicApiKey?: string; 
  public get anthropicApiKey() {
    return this.getStringAttribute('anthropic_api_key');
  }
  public set anthropicApiKey(value: string) {
    this._anthropicApiKey = value;
  }
  public resetAnthropicApiKey() {
    this._anthropicApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicApiKeyInput() {
    return this._anthropicApiKey;
  }

  // anthropic_api_key_plaintext - computed: true, optional: true, required: false
  private _anthropicApiKeyPlaintext?: string; 
  public get anthropicApiKeyPlaintext() {
    return this.getStringAttribute('anthropic_api_key_plaintext');
  }
  public set anthropicApiKeyPlaintext(value: string) {
    this._anthropicApiKeyPlaintext = value;
  }
  public resetAnthropicApiKeyPlaintext() {
    this._anthropicApiKeyPlaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicApiKeyPlaintextInput() {
    return this._anthropicApiKeyPlaintext;
  }
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#cohere_api_base DataDatabricksServingEndpoints#cohere_api_base}
  */
  readonly cohereApiBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#cohere_api_key DataDatabricksServingEndpoints#cohere_api_key}
  */
  readonly cohereApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#cohere_api_key_plaintext DataDatabricksServingEndpoints#cohere_api_key_plaintext}
  */
  readonly cohereApiKeyPlaintext?: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cohere_api_base: cdktf.stringToTerraform(struct!.cohereApiBase),
    cohere_api_key: cdktf.stringToTerraform(struct!.cohereApiKey),
    cohere_api_key_plaintext: cdktf.stringToTerraform(struct!.cohereApiKeyPlaintext),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cohere_api_base: {
      value: cdktf.stringToHclTerraform(struct!.cohereApiBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cohere_api_key: {
      value: cdktf.stringToHclTerraform(struct!.cohereApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cohere_api_key_plaintext: {
      value: cdktf.stringToHclTerraform(struct!.cohereApiKeyPlaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cohereApiBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohereApiBase = this._cohereApiBase;
    }
    if (this._cohereApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohereApiKey = this._cohereApiKey;
    }
    if (this._cohereApiKeyPlaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohereApiKeyPlaintext = this._cohereApiKeyPlaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cohereApiBase = undefined;
      this._cohereApiKey = undefined;
      this._cohereApiKeyPlaintext = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cohereApiBase = value.cohereApiBase;
      this._cohereApiKey = value.cohereApiKey;
      this._cohereApiKeyPlaintext = value.cohereApiKeyPlaintext;
    }
  }

  // cohere_api_base - computed: true, optional: true, required: false
  private _cohereApiBase?: string; 
  public get cohereApiBase() {
    return this.getStringAttribute('cohere_api_base');
  }
  public set cohereApiBase(value: string) {
    this._cohereApiBase = value;
  }
  public resetCohereApiBase() {
    this._cohereApiBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cohereApiBaseInput() {
    return this._cohereApiBase;
  }

  // cohere_api_key - computed: true, optional: true, required: false
  private _cohereApiKey?: string; 
  public get cohereApiKey() {
    return this.getStringAttribute('cohere_api_key');
  }
  public set cohereApiKey(value: string) {
    this._cohereApiKey = value;
  }
  public resetCohereApiKey() {
    this._cohereApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cohereApiKeyInput() {
    return this._cohereApiKey;
  }

  // cohere_api_key_plaintext - computed: true, optional: true, required: false
  private _cohereApiKeyPlaintext?: string; 
  public get cohereApiKeyPlaintext() {
    return this.getStringAttribute('cohere_api_key_plaintext');
  }
  public set cohereApiKeyPlaintext(value: string) {
    this._cohereApiKeyPlaintext = value;
  }
  public resetCohereApiKeyPlaintext() {
    this._cohereApiKeyPlaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cohereApiKeyPlaintextInput() {
    return this._cohereApiKeyPlaintext;
  }
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#key DataDatabricksServingEndpoints#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#value DataDatabricksServingEndpoints#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#value_plaintext DataDatabricksServingEndpoints#value_plaintext}
  */
  readonly valuePlaintext?: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    value_plaintext: cdktf.stringToTerraform(struct!.valuePlaintext),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth | cdktf.IResolvable): any {
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
    value_plaintext: {
      value: cdktf.stringToHclTerraform(struct!.valuePlaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth | cdktf.IResolvable | undefined {
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
    if (this._valuePlaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePlaintext = this._valuePlaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
      this._valuePlaintext = undefined;
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
      this._valuePlaintext = value.valuePlaintext;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // value_plaintext - computed: true, optional: true, required: false
  private _valuePlaintext?: string; 
  public get valuePlaintext() {
    return this.getStringAttribute('value_plaintext');
  }
  public set valuePlaintext(value: string) {
    this._valuePlaintext = value;
  }
  public resetValuePlaintext() {
    this._valuePlaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePlaintextInput() {
    return this._valuePlaintext;
  }
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#token DataDatabricksServingEndpoints#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#token_plaintext DataDatabricksServingEndpoints#token_plaintext}
  */
  readonly tokenPlaintext?: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
    token_plaintext: cdktf.stringToTerraform(struct!.tokenPlaintext),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_plaintext: {
      value: cdktf.stringToHclTerraform(struct!.tokenPlaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._tokenPlaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenPlaintext = this._tokenPlaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._token = undefined;
      this._tokenPlaintext = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._token = value.token;
      this._tokenPlaintext = value.tokenPlaintext;
    }
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_plaintext - computed: true, optional: true, required: false
  private _tokenPlaintext?: string; 
  public get tokenPlaintext() {
    return this.getStringAttribute('token_plaintext');
  }
  public set tokenPlaintext(value: string) {
    this._tokenPlaintext = value;
  }
  public resetTokenPlaintext() {
    this._tokenPlaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPlaintextInput() {
    return this._tokenPlaintext;
  }
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#api_key_auth DataDatabricksServingEndpoints#api_key_auth}
  */
  readonly apiKeyAuth?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#bearer_token_auth DataDatabricksServingEndpoints#bearer_token_auth}
  */
  readonly bearerTokenAuth?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#custom_provider_url DataDatabricksServingEndpoints#custom_provider_url}
  */
  readonly customProviderUrl: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_auth: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthToTerraform, false)(struct!.apiKeyAuth),
    bearer_token_auth: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthToTerraform, false)(struct!.bearerTokenAuth),
    custom_provider_url: cdktf.stringToTerraform(struct!.customProviderUrl),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_auth: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthToHclTerraform, false)(struct!.apiKeyAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthList",
    },
    bearer_token_auth: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthToHclTerraform, false)(struct!.bearerTokenAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthList",
    },
    custom_provider_url: {
      value: cdktf.stringToHclTerraform(struct!.customProviderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAuth = this._apiKeyAuth?.internalValue;
    }
    if (this._bearerTokenAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenAuth = this._bearerTokenAuth?.internalValue;
    }
    if (this._customProviderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProviderUrl = this._customProviderUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeyAuth.internalValue = undefined;
      this._bearerTokenAuth.internalValue = undefined;
      this._customProviderUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeyAuth.internalValue = value.apiKeyAuth;
      this._bearerTokenAuth.internalValue = value.bearerTokenAuth;
      this._customProviderUrl = value.customProviderUrl;
    }
  }

  // api_key_auth - computed: true, optional: true, required: false
  private _apiKeyAuth = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthList(this, "api_key_auth", false);
  public get apiKeyAuth() {
    return this._apiKeyAuth;
  }
  public putApiKeyAuth(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth[] | cdktf.IResolvable) {
    this._apiKeyAuth.internalValue = value;
  }
  public resetApiKeyAuth() {
    this._apiKeyAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAuthInput() {
    return this._apiKeyAuth.internalValue;
  }

  // bearer_token_auth - computed: true, optional: true, required: false
  private _bearerTokenAuth = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthList(this, "bearer_token_auth", false);
  public get bearerTokenAuth() {
    return this._bearerTokenAuth;
  }
  public putBearerTokenAuth(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth[] | cdktf.IResolvable) {
    this._bearerTokenAuth.internalValue = value;
  }
  public resetBearerTokenAuth() {
    this._bearerTokenAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenAuthInput() {
    return this._bearerTokenAuth.internalValue;
  }

  // custom_provider_url - computed: true, optional: false, required: true
  private _customProviderUrl?: string; 
  public get customProviderUrl() {
    return this.getStringAttribute('custom_provider_url');
  }
  public set customProviderUrl(value: string) {
    this._customProviderUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customProviderUrlInput() {
    return this._customProviderUrl;
  }
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfig[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#databricks_api_token DataDatabricksServingEndpoints#databricks_api_token}
  */
  readonly databricksApiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#databricks_api_token_plaintext DataDatabricksServingEndpoints#databricks_api_token_plaintext}
  */
  readonly databricksApiTokenPlaintext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#databricks_workspace_url DataDatabricksServingEndpoints#databricks_workspace_url}
  */
  readonly databricksWorkspaceUrl: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    databricks_api_token: cdktf.stringToTerraform(struct!.databricksApiToken),
    databricks_api_token_plaintext: cdktf.stringToTerraform(struct!.databricksApiTokenPlaintext),
    databricks_workspace_url: cdktf.stringToTerraform(struct!.databricksWorkspaceUrl),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    databricks_api_token: {
      value: cdktf.stringToHclTerraform(struct!.databricksApiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databricks_api_token_plaintext: {
      value: cdktf.stringToHclTerraform(struct!.databricksApiTokenPlaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databricks_workspace_url: {
      value: cdktf.stringToHclTerraform(struct!.databricksWorkspaceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databricksApiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksApiToken = this._databricksApiToken;
    }
    if (this._databricksApiTokenPlaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksApiTokenPlaintext = this._databricksApiTokenPlaintext;
    }
    if (this._databricksWorkspaceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksWorkspaceUrl = this._databricksWorkspaceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databricksApiToken = undefined;
      this._databricksApiTokenPlaintext = undefined;
      this._databricksWorkspaceUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databricksApiToken = value.databricksApiToken;
      this._databricksApiTokenPlaintext = value.databricksApiTokenPlaintext;
      this._databricksWorkspaceUrl = value.databricksWorkspaceUrl;
    }
  }

  // databricks_api_token - computed: true, optional: true, required: false
  private _databricksApiToken?: string; 
  public get databricksApiToken() {
    return this.getStringAttribute('databricks_api_token');
  }
  public set databricksApiToken(value: string) {
    this._databricksApiToken = value;
  }
  public resetDatabricksApiToken() {
    this._databricksApiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksApiTokenInput() {
    return this._databricksApiToken;
  }

  // databricks_api_token_plaintext - computed: true, optional: true, required: false
  private _databricksApiTokenPlaintext?: string; 
  public get databricksApiTokenPlaintext() {
    return this.getStringAttribute('databricks_api_token_plaintext');
  }
  public set databricksApiTokenPlaintext(value: string) {
    this._databricksApiTokenPlaintext = value;
  }
  public resetDatabricksApiTokenPlaintext() {
    this._databricksApiTokenPlaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksApiTokenPlaintextInput() {
    return this._databricksApiTokenPlaintext;
  }

  // databricks_workspace_url - computed: true, optional: false, required: true
  private _databricksWorkspaceUrl?: string; 
  public get databricksWorkspaceUrl() {
    return this.getStringAttribute('databricks_workspace_url');
  }
  public set databricksWorkspaceUrl(value: string) {
    this._databricksWorkspaceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksWorkspaceUrlInput() {
    return this._databricksWorkspaceUrl;
  }
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#private_key DataDatabricksServingEndpoints#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#private_key_plaintext DataDatabricksServingEndpoints#private_key_plaintext}
  */
  readonly privateKeyPlaintext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#project_id DataDatabricksServingEndpoints#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#region DataDatabricksServingEndpoints#region}
  */
  readonly region: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_plaintext: cdktf.stringToTerraform(struct!.privateKeyPlaintext),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_plaintext: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPlaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyPlaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPlaintext = this._privateKeyPlaintext;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privateKey = undefined;
      this._privateKeyPlaintext = undefined;
      this._projectId = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privateKey = value.privateKey;
      this._privateKeyPlaintext = value.privateKeyPlaintext;
      this._projectId = value.projectId;
      this._region = value.region;
    }
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_plaintext - computed: true, optional: true, required: false
  private _privateKeyPlaintext?: string; 
  public get privateKeyPlaintext() {
    return this.getStringAttribute('private_key_plaintext');
  }
  public set privateKeyPlaintext(value: string) {
    this._privateKeyPlaintext = value;
  }
  public resetPrivateKeyPlaintext() {
    this._privateKeyPlaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPlaintextInput() {
    return this._privateKeyPlaintext;
  }

  // project_id - computed: true, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: true, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#microsoft_entra_client_id DataDatabricksServingEndpoints#microsoft_entra_client_id}
  */
  readonly microsoftEntraClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#microsoft_entra_client_secret DataDatabricksServingEndpoints#microsoft_entra_client_secret}
  */
  readonly microsoftEntraClientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#microsoft_entra_client_secret_plaintext DataDatabricksServingEndpoints#microsoft_entra_client_secret_plaintext}
  */
  readonly microsoftEntraClientSecretPlaintext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#microsoft_entra_tenant_id DataDatabricksServingEndpoints#microsoft_entra_tenant_id}
  */
  readonly microsoftEntraTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#openai_api_base DataDatabricksServingEndpoints#openai_api_base}
  */
  readonly openaiApiBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#openai_api_key DataDatabricksServingEndpoints#openai_api_key}
  */
  readonly openaiApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#openai_api_key_plaintext DataDatabricksServingEndpoints#openai_api_key_plaintext}
  */
  readonly openaiApiKeyPlaintext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#openai_api_type DataDatabricksServingEndpoints#openai_api_type}
  */
  readonly openaiApiType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#openai_api_version DataDatabricksServingEndpoints#openai_api_version}
  */
  readonly openaiApiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#openai_deployment_name DataDatabricksServingEndpoints#openai_deployment_name}
  */
  readonly openaiDeploymentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#openai_organization DataDatabricksServingEndpoints#openai_organization}
  */
  readonly openaiOrganization?: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    microsoft_entra_client_id: cdktf.stringToTerraform(struct!.microsoftEntraClientId),
    microsoft_entra_client_secret: cdktf.stringToTerraform(struct!.microsoftEntraClientSecret),
    microsoft_entra_client_secret_plaintext: cdktf.stringToTerraform(struct!.microsoftEntraClientSecretPlaintext),
    microsoft_entra_tenant_id: cdktf.stringToTerraform(struct!.microsoftEntraTenantId),
    openai_api_base: cdktf.stringToTerraform(struct!.openaiApiBase),
    openai_api_key: cdktf.stringToTerraform(struct!.openaiApiKey),
    openai_api_key_plaintext: cdktf.stringToTerraform(struct!.openaiApiKeyPlaintext),
    openai_api_type: cdktf.stringToTerraform(struct!.openaiApiType),
    openai_api_version: cdktf.stringToTerraform(struct!.openaiApiVersion),
    openai_deployment_name: cdktf.stringToTerraform(struct!.openaiDeploymentName),
    openai_organization: cdktf.stringToTerraform(struct!.openaiOrganization),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    microsoft_entra_client_id: {
      value: cdktf.stringToHclTerraform(struct!.microsoftEntraClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    microsoft_entra_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.microsoftEntraClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    microsoft_entra_client_secret_plaintext: {
      value: cdktf.stringToHclTerraform(struct!.microsoftEntraClientSecretPlaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    microsoft_entra_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.microsoftEntraTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openai_api_base: {
      value: cdktf.stringToHclTerraform(struct!.openaiApiBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openai_api_key: {
      value: cdktf.stringToHclTerraform(struct!.openaiApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openai_api_key_plaintext: {
      value: cdktf.stringToHclTerraform(struct!.openaiApiKeyPlaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openai_api_type: {
      value: cdktf.stringToHclTerraform(struct!.openaiApiType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openai_api_version: {
      value: cdktf.stringToHclTerraform(struct!.openaiApiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openai_deployment_name: {
      value: cdktf.stringToHclTerraform(struct!.openaiDeploymentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openai_organization: {
      value: cdktf.stringToHclTerraform(struct!.openaiOrganization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._microsoftEntraClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftEntraClientId = this._microsoftEntraClientId;
    }
    if (this._microsoftEntraClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftEntraClientSecret = this._microsoftEntraClientSecret;
    }
    if (this._microsoftEntraClientSecretPlaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftEntraClientSecretPlaintext = this._microsoftEntraClientSecretPlaintext;
    }
    if (this._microsoftEntraTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftEntraTenantId = this._microsoftEntraTenantId;
    }
    if (this._openaiApiBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiApiBase = this._openaiApiBase;
    }
    if (this._openaiApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiApiKey = this._openaiApiKey;
    }
    if (this._openaiApiKeyPlaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiApiKeyPlaintext = this._openaiApiKeyPlaintext;
    }
    if (this._openaiApiType !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiApiType = this._openaiApiType;
    }
    if (this._openaiApiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiApiVersion = this._openaiApiVersion;
    }
    if (this._openaiDeploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiDeploymentName = this._openaiDeploymentName;
    }
    if (this._openaiOrganization !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiOrganization = this._openaiOrganization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._microsoftEntraClientId = undefined;
      this._microsoftEntraClientSecret = undefined;
      this._microsoftEntraClientSecretPlaintext = undefined;
      this._microsoftEntraTenantId = undefined;
      this._openaiApiBase = undefined;
      this._openaiApiKey = undefined;
      this._openaiApiKeyPlaintext = undefined;
      this._openaiApiType = undefined;
      this._openaiApiVersion = undefined;
      this._openaiDeploymentName = undefined;
      this._openaiOrganization = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._microsoftEntraClientId = value.microsoftEntraClientId;
      this._microsoftEntraClientSecret = value.microsoftEntraClientSecret;
      this._microsoftEntraClientSecretPlaintext = value.microsoftEntraClientSecretPlaintext;
      this._microsoftEntraTenantId = value.microsoftEntraTenantId;
      this._openaiApiBase = value.openaiApiBase;
      this._openaiApiKey = value.openaiApiKey;
      this._openaiApiKeyPlaintext = value.openaiApiKeyPlaintext;
      this._openaiApiType = value.openaiApiType;
      this._openaiApiVersion = value.openaiApiVersion;
      this._openaiDeploymentName = value.openaiDeploymentName;
      this._openaiOrganization = value.openaiOrganization;
    }
  }

  // microsoft_entra_client_id - computed: true, optional: true, required: false
  private _microsoftEntraClientId?: string; 
  public get microsoftEntraClientId() {
    return this.getStringAttribute('microsoft_entra_client_id');
  }
  public set microsoftEntraClientId(value: string) {
    this._microsoftEntraClientId = value;
  }
  public resetMicrosoftEntraClientId() {
    this._microsoftEntraClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftEntraClientIdInput() {
    return this._microsoftEntraClientId;
  }

  // microsoft_entra_client_secret - computed: true, optional: true, required: false
  private _microsoftEntraClientSecret?: string; 
  public get microsoftEntraClientSecret() {
    return this.getStringAttribute('microsoft_entra_client_secret');
  }
  public set microsoftEntraClientSecret(value: string) {
    this._microsoftEntraClientSecret = value;
  }
  public resetMicrosoftEntraClientSecret() {
    this._microsoftEntraClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftEntraClientSecretInput() {
    return this._microsoftEntraClientSecret;
  }

  // microsoft_entra_client_secret_plaintext - computed: true, optional: true, required: false
  private _microsoftEntraClientSecretPlaintext?: string; 
  public get microsoftEntraClientSecretPlaintext() {
    return this.getStringAttribute('microsoft_entra_client_secret_plaintext');
  }
  public set microsoftEntraClientSecretPlaintext(value: string) {
    this._microsoftEntraClientSecretPlaintext = value;
  }
  public resetMicrosoftEntraClientSecretPlaintext() {
    this._microsoftEntraClientSecretPlaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftEntraClientSecretPlaintextInput() {
    return this._microsoftEntraClientSecretPlaintext;
  }

  // microsoft_entra_tenant_id - computed: true, optional: true, required: false
  private _microsoftEntraTenantId?: string; 
  public get microsoftEntraTenantId() {
    return this.getStringAttribute('microsoft_entra_tenant_id');
  }
  public set microsoftEntraTenantId(value: string) {
    this._microsoftEntraTenantId = value;
  }
  public resetMicrosoftEntraTenantId() {
    this._microsoftEntraTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftEntraTenantIdInput() {
    return this._microsoftEntraTenantId;
  }

  // openai_api_base - computed: true, optional: true, required: false
  private _openaiApiBase?: string; 
  public get openaiApiBase() {
    return this.getStringAttribute('openai_api_base');
  }
  public set openaiApiBase(value: string) {
    this._openaiApiBase = value;
  }
  public resetOpenaiApiBase() {
    this._openaiApiBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiApiBaseInput() {
    return this._openaiApiBase;
  }

  // openai_api_key - computed: true, optional: true, required: false
  private _openaiApiKey?: string; 
  public get openaiApiKey() {
    return this.getStringAttribute('openai_api_key');
  }
  public set openaiApiKey(value: string) {
    this._openaiApiKey = value;
  }
  public resetOpenaiApiKey() {
    this._openaiApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiApiKeyInput() {
    return this._openaiApiKey;
  }

  // openai_api_key_plaintext - computed: true, optional: true, required: false
  private _openaiApiKeyPlaintext?: string; 
  public get openaiApiKeyPlaintext() {
    return this.getStringAttribute('openai_api_key_plaintext');
  }
  public set openaiApiKeyPlaintext(value: string) {
    this._openaiApiKeyPlaintext = value;
  }
  public resetOpenaiApiKeyPlaintext() {
    this._openaiApiKeyPlaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiApiKeyPlaintextInput() {
    return this._openaiApiKeyPlaintext;
  }

  // openai_api_type - computed: true, optional: true, required: false
  private _openaiApiType?: string; 
  public get openaiApiType() {
    return this.getStringAttribute('openai_api_type');
  }
  public set openaiApiType(value: string) {
    this._openaiApiType = value;
  }
  public resetOpenaiApiType() {
    this._openaiApiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiApiTypeInput() {
    return this._openaiApiType;
  }

  // openai_api_version - computed: true, optional: true, required: false
  private _openaiApiVersion?: string; 
  public get openaiApiVersion() {
    return this.getStringAttribute('openai_api_version');
  }
  public set openaiApiVersion(value: string) {
    this._openaiApiVersion = value;
  }
  public resetOpenaiApiVersion() {
    this._openaiApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiApiVersionInput() {
    return this._openaiApiVersion;
  }

  // openai_deployment_name - computed: true, optional: true, required: false
  private _openaiDeploymentName?: string; 
  public get openaiDeploymentName() {
    return this.getStringAttribute('openai_deployment_name');
  }
  public set openaiDeploymentName(value: string) {
    this._openaiDeploymentName = value;
  }
  public resetOpenaiDeploymentName() {
    this._openaiDeploymentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiDeploymentNameInput() {
    return this._openaiDeploymentName;
  }

  // openai_organization - computed: true, optional: true, required: false
  private _openaiOrganization?: string; 
  public get openaiOrganization() {
    return this.getStringAttribute('openai_organization');
  }
  public set openaiOrganization(value: string) {
    this._openaiOrganization = value;
  }
  public resetOpenaiOrganization() {
    this._openaiOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiOrganizationInput() {
    return this._openaiOrganization;
  }
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#palm_api_key DataDatabricksServingEndpoints#palm_api_key}
  */
  readonly palmApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#palm_api_key_plaintext DataDatabricksServingEndpoints#palm_api_key_plaintext}
  */
  readonly palmApiKeyPlaintext?: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    palm_api_key: cdktf.stringToTerraform(struct!.palmApiKey),
    palm_api_key_plaintext: cdktf.stringToTerraform(struct!.palmApiKeyPlaintext),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    palm_api_key: {
      value: cdktf.stringToHclTerraform(struct!.palmApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    palm_api_key_plaintext: {
      value: cdktf.stringToHclTerraform(struct!.palmApiKeyPlaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._palmApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.palmApiKey = this._palmApiKey;
    }
    if (this._palmApiKeyPlaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.palmApiKeyPlaintext = this._palmApiKeyPlaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._palmApiKey = undefined;
      this._palmApiKeyPlaintext = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._palmApiKey = value.palmApiKey;
      this._palmApiKeyPlaintext = value.palmApiKeyPlaintext;
    }
  }

  // palm_api_key - computed: true, optional: true, required: false
  private _palmApiKey?: string; 
  public get palmApiKey() {
    return this.getStringAttribute('palm_api_key');
  }
  public set palmApiKey(value: string) {
    this._palmApiKey = value;
  }
  public resetPalmApiKey() {
    this._palmApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get palmApiKeyInput() {
    return this._palmApiKey;
  }

  // palm_api_key_plaintext - computed: true, optional: true, required: false
  private _palmApiKeyPlaintext?: string; 
  public get palmApiKeyPlaintext() {
    return this.getStringAttribute('palm_api_key_plaintext');
  }
  public set palmApiKeyPlaintext(value: string) {
    this._palmApiKeyPlaintext = value;
  }
  public resetPalmApiKeyPlaintext() {
    this._palmApiKeyPlaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get palmApiKeyPlaintextInput() {
    return this._palmApiKeyPlaintext;
  }
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#ai21labs_config DataDatabricksServingEndpoints#ai21labs_config}
  */
  readonly ai21LabsConfig?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#amazon_bedrock_config DataDatabricksServingEndpoints#amazon_bedrock_config}
  */
  readonly amazonBedrockConfig?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#anthropic_config DataDatabricksServingEndpoints#anthropic_config}
  */
  readonly anthropicConfig?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#cohere_config DataDatabricksServingEndpoints#cohere_config}
  */
  readonly cohereConfig?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#custom_provider_config DataDatabricksServingEndpoints#custom_provider_config}
  */
  readonly customProviderConfig?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#databricks_model_serving_config DataDatabricksServingEndpoints#databricks_model_serving_config}
  */
  readonly databricksModelServingConfig?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#google_cloud_vertex_ai_config DataDatabricksServingEndpoints#google_cloud_vertex_ai_config}
  */
  readonly googleCloudVertexAiConfig?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#openai_config DataDatabricksServingEndpoints#openai_config}
  */
  readonly openaiConfig?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#palm_config DataDatabricksServingEndpoints#palm_config}
  */
  readonly palmConfig?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#provider DataDatabricksServingEndpoints#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#task DataDatabricksServingEndpoints#task}
  */
  readonly task: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai21labs_config: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigToTerraform, false)(struct!.ai21LabsConfig),
    amazon_bedrock_config: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigToTerraform, false)(struct!.amazonBedrockConfig),
    anthropic_config: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigToTerraform, false)(struct!.anthropicConfig),
    cohere_config: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigToTerraform, false)(struct!.cohereConfig),
    custom_provider_config: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigToTerraform, false)(struct!.customProviderConfig),
    databricks_model_serving_config: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigToTerraform, false)(struct!.databricksModelServingConfig),
    google_cloud_vertex_ai_config: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigToTerraform, false)(struct!.googleCloudVertexAiConfig),
    name: cdktf.stringToTerraform(struct!.name),
    openai_config: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigToTerraform, false)(struct!.openaiConfig),
    palm_config: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigToTerraform, false)(struct!.palmConfig),
    provider: cdktf.stringToTerraform(struct!.provider),
    task: cdktf.stringToTerraform(struct!.task),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai21labs_config: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigToHclTerraform, false)(struct!.ai21LabsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList",
    },
    amazon_bedrock_config: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigToHclTerraform, false)(struct!.amazonBedrockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList",
    },
    anthropic_config: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigToHclTerraform, false)(struct!.anthropicConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList",
    },
    cohere_config: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigToHclTerraform, false)(struct!.cohereConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList",
    },
    custom_provider_config: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigToHclTerraform, false)(struct!.customProviderConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigList",
    },
    databricks_model_serving_config: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigToHclTerraform, false)(struct!.databricksModelServingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList",
    },
    google_cloud_vertex_ai_config: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigToHclTerraform, false)(struct!.googleCloudVertexAiConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openai_config: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigToHclTerraform, false)(struct!.openaiConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList",
    },
    palm_config: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigToHclTerraform, false)(struct!.palmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task: {
      value: cdktf.stringToHclTerraform(struct!.task),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ai21LabsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ai21LabsConfig = this._ai21LabsConfig?.internalValue;
    }
    if (this._amazonBedrockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonBedrockConfig = this._amazonBedrockConfig?.internalValue;
    }
    if (this._anthropicConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthropicConfig = this._anthropicConfig?.internalValue;
    }
    if (this._cohereConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohereConfig = this._cohereConfig?.internalValue;
    }
    if (this._customProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProviderConfig = this._customProviderConfig?.internalValue;
    }
    if (this._databricksModelServingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksModelServingConfig = this._databricksModelServingConfig?.internalValue;
    }
    if (this._googleCloudVertexAiConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudVertexAiConfig = this._googleCloudVertexAiConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._openaiConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiConfig = this._openaiConfig?.internalValue;
    }
    if (this._palmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.palmConfig = this._palmConfig?.internalValue;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._task !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ai21LabsConfig.internalValue = undefined;
      this._amazonBedrockConfig.internalValue = undefined;
      this._anthropicConfig.internalValue = undefined;
      this._cohereConfig.internalValue = undefined;
      this._customProviderConfig.internalValue = undefined;
      this._databricksModelServingConfig.internalValue = undefined;
      this._googleCloudVertexAiConfig.internalValue = undefined;
      this._name = undefined;
      this._openaiConfig.internalValue = undefined;
      this._palmConfig.internalValue = undefined;
      this._provider = undefined;
      this._task = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ai21LabsConfig.internalValue = value.ai21LabsConfig;
      this._amazonBedrockConfig.internalValue = value.amazonBedrockConfig;
      this._anthropicConfig.internalValue = value.anthropicConfig;
      this._cohereConfig.internalValue = value.cohereConfig;
      this._customProviderConfig.internalValue = value.customProviderConfig;
      this._databricksModelServingConfig.internalValue = value.databricksModelServingConfig;
      this._googleCloudVertexAiConfig.internalValue = value.googleCloudVertexAiConfig;
      this._name = value.name;
      this._openaiConfig.internalValue = value.openaiConfig;
      this._palmConfig.internalValue = value.palmConfig;
      this._provider = value.provider;
      this._task = value.task;
    }
  }

  // ai21labs_config - computed: true, optional: true, required: false
  private _ai21LabsConfig = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList(this, "ai21labs_config", false);
  public get ai21LabsConfig() {
    return this._ai21LabsConfig;
  }
  public putAi21LabsConfig(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig[] | cdktf.IResolvable) {
    this._ai21LabsConfig.internalValue = value;
  }
  public resetAi21LabsConfig() {
    this._ai21LabsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ai21LabsConfigInput() {
    return this._ai21LabsConfig.internalValue;
  }

  // amazon_bedrock_config - computed: true, optional: true, required: false
  private _amazonBedrockConfig = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList(this, "amazon_bedrock_config", false);
  public get amazonBedrockConfig() {
    return this._amazonBedrockConfig;
  }
  public putAmazonBedrockConfig(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig[] | cdktf.IResolvable) {
    this._amazonBedrockConfig.internalValue = value;
  }
  public resetAmazonBedrockConfig() {
    this._amazonBedrockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonBedrockConfigInput() {
    return this._amazonBedrockConfig.internalValue;
  }

  // anthropic_config - computed: true, optional: true, required: false
  private _anthropicConfig = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList(this, "anthropic_config", false);
  public get anthropicConfig() {
    return this._anthropicConfig;
  }
  public putAnthropicConfig(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig[] | cdktf.IResolvable) {
    this._anthropicConfig.internalValue = value;
  }
  public resetAnthropicConfig() {
    this._anthropicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicConfigInput() {
    return this._anthropicConfig.internalValue;
  }

  // cohere_config - computed: true, optional: true, required: false
  private _cohereConfig = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList(this, "cohere_config", false);
  public get cohereConfig() {
    return this._cohereConfig;
  }
  public putCohereConfig(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig[] | cdktf.IResolvable) {
    this._cohereConfig.internalValue = value;
  }
  public resetCohereConfig() {
    this._cohereConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cohereConfigInput() {
    return this._cohereConfig.internalValue;
  }

  // custom_provider_config - computed: true, optional: true, required: false
  private _customProviderConfig = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfigList(this, "custom_provider_config", false);
  public get customProviderConfig() {
    return this._customProviderConfig;
  }
  public putCustomProviderConfig(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCustomProviderConfig[] | cdktf.IResolvable) {
    this._customProviderConfig.internalValue = value;
  }
  public resetCustomProviderConfig() {
    this._customProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProviderConfigInput() {
    return this._customProviderConfig.internalValue;
  }

  // databricks_model_serving_config - computed: true, optional: true, required: false
  private _databricksModelServingConfig = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList(this, "databricks_model_serving_config", false);
  public get databricksModelServingConfig() {
    return this._databricksModelServingConfig;
  }
  public putDatabricksModelServingConfig(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig[] | cdktf.IResolvable) {
    this._databricksModelServingConfig.internalValue = value;
  }
  public resetDatabricksModelServingConfig() {
    this._databricksModelServingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksModelServingConfigInput() {
    return this._databricksModelServingConfig.internalValue;
  }

  // google_cloud_vertex_ai_config - computed: true, optional: true, required: false
  private _googleCloudVertexAiConfig = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList(this, "google_cloud_vertex_ai_config", false);
  public get googleCloudVertexAiConfig() {
    return this._googleCloudVertexAiConfig;
  }
  public putGoogleCloudVertexAiConfig(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig[] | cdktf.IResolvable) {
    this._googleCloudVertexAiConfig.internalValue = value;
  }
  public resetGoogleCloudVertexAiConfig() {
    this._googleCloudVertexAiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudVertexAiConfigInput() {
    return this._googleCloudVertexAiConfig.internalValue;
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

  // openai_config - computed: true, optional: true, required: false
  private _openaiConfig = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList(this, "openai_config", false);
  public get openaiConfig() {
    return this._openaiConfig;
  }
  public putOpenaiConfig(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig[] | cdktf.IResolvable) {
    this._openaiConfig.internalValue = value;
  }
  public resetOpenaiConfig() {
    this._openaiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiConfigInput() {
    return this._openaiConfig.internalValue;
  }

  // palm_config - computed: true, optional: true, required: false
  private _palmConfig = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList(this, "palm_config", false);
  public get palmConfig() {
    return this._palmConfig;
  }
  public putPalmConfig(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig[] | cdktf.IResolvable) {
    this._palmConfig.internalValue = value;
  }
  public resetPalmConfig() {
    this._palmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get palmConfigInput() {
    return this._palmConfig.internalValue;
  }

  // provider - computed: true, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // task - computed: true, optional: false, required: true
  private _task?: string; 
  public get task() {
    return this.getStringAttribute('task');
  }
  public set task(value: string) {
    this._task = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task;
  }
}

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#description DataDatabricksServingEndpoints#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#display_name DataDatabricksServingEndpoints#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#docs DataDatabricksServingEndpoints#docs}
  */
  readonly docs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}
  */
  readonly name?: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    docs: cdktf.stringToTerraform(struct!.docs),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    docs: {
      value: cdktf.stringToHclTerraform(struct!.docs),
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

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._docs !== undefined) {
      hasAnyValues = true;
      internalValueResult.docs = this._docs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._docs = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._docs = value.docs;
      this._name = value.name;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // docs - computed: true, optional: true, required: false
  private _docs?: string; 
  public get docs() {
    return this.getStringAttribute('docs');
  }
  public set docs(value: string) {
    this._docs = value;
  }
  public resetDocs() {
    this._docs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docsInput() {
    return this._docs;
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

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedEntities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#entity_name DataDatabricksServingEndpoints#entity_name}
  */
  readonly entityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#entity_version DataDatabricksServingEndpoints#entity_version}
  */
  readonly entityVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#external_model DataDatabricksServingEndpoints#external_model}
  */
  readonly externalModel?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#foundation_model DataDatabricksServingEndpoints#foundation_model}
  */
  readonly foundationModel?: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}
  */
  readonly name?: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_name: cdktf.stringToTerraform(struct!.entityName),
    entity_version: cdktf.stringToTerraform(struct!.entityVersion),
    external_model: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelToTerraform, false)(struct!.externalModel),
    foundation_model: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelToTerraform, false)(struct!.foundationModel),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedEntitiesToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_name: {
      value: cdktf.stringToHclTerraform(struct!.entityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_version: {
      value: cdktf.stringToHclTerraform(struct!.entityVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_model: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelToHclTerraform, false)(struct!.externalModel),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList",
    },
    foundation_model: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelToHclTerraform, false)(struct!.foundationModel),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList",
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

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedEntities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityName = this._entityName;
    }
    if (this._entityVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityVersion = this._entityVersion;
    }
    if (this._externalModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalModel = this._externalModel?.internalValue;
    }
    if (this._foundationModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foundationModel = this._foundationModel?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedEntities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityName = undefined;
      this._entityVersion = undefined;
      this._externalModel.internalValue = undefined;
      this._foundationModel.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityName = value.entityName;
      this._entityVersion = value.entityVersion;
      this._externalModel.internalValue = value.externalModel;
      this._foundationModel.internalValue = value.foundationModel;
      this._name = value.name;
    }
  }

  // entity_name - computed: true, optional: true, required: false
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  public resetEntityName() {
    this._entityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }

  // entity_version - computed: true, optional: true, required: false
  private _entityVersion?: string; 
  public get entityVersion() {
    return this.getStringAttribute('entity_version');
  }
  public set entityVersion(value: string) {
    this._entityVersion = value;
  }
  public resetEntityVersion() {
    this._entityVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityVersionInput() {
    return this._entityVersion;
  }

  // external_model - computed: true, optional: true, required: false
  private _externalModel = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList(this, "external_model", false);
  public get externalModel() {
    return this._externalModel;
  }
  public putExternalModel(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel[] | cdktf.IResolvable) {
    this._externalModel.internalValue = value;
  }
  public resetExternalModel() {
    this._externalModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalModelInput() {
    return this._externalModel.internalValue;
  }

  // foundation_model - computed: true, optional: true, required: false
  private _foundationModel = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList(this, "foundation_model", false);
  public get foundationModel() {
    return this._foundationModel;
  }
  public putFoundationModel(value: DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel[] | cdktf.IResolvable) {
    this._foundationModel.internalValue = value;
  }
  public resetFoundationModel() {
    this._foundationModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foundationModelInput() {
    return this._foundationModel.internalValue;
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

export class DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedEntities[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfigServedModels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#model_name DataDatabricksServingEndpoints#model_name}
  */
  readonly modelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#model_version DataDatabricksServingEndpoints#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}
  */
  readonly name?: string;
}

export function dataDatabricksServingEndpointsEndpointsConfigServedModelsToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedModels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model_name: cdktf.stringToTerraform(struct!.modelName),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigServedModelsToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfigServedModels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model_name: {
      value: cdktf.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktf.stringToHclTerraform(struct!.modelVersion),
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

export class DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfigServedModels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfigServedModels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelName = undefined;
      this._modelVersion = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelName = value.modelName;
      this._modelVersion = value.modelVersion;
      this._name = value.name;
    }
  }

  // model_name - computed: true, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // model_version - computed: true, optional: true, required: false
  private _modelVersion?: string; 
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }
  public set modelVersion(value: string) {
    this._modelVersion = value;
  }
  public resetModelVersion() {
    this._modelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionInput() {
    return this._modelVersion;
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

export class DataDatabricksServingEndpointsEndpointsConfigServedModelsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfigServedModels[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#served_entities DataDatabricksServingEndpoints#served_entities}
  */
  readonly servedEntities?: DataDatabricksServingEndpointsEndpointsConfigServedEntities[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#served_models DataDatabricksServingEndpoints#served_models}
  */
  readonly servedModels?: DataDatabricksServingEndpointsEndpointsConfigServedModels[] | cdktf.IResolvable;
}

export function dataDatabricksServingEndpointsEndpointsConfigToTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    served_entities: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesToTerraform, false)(struct!.servedEntities),
    served_models: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigServedModelsToTerraform, false)(struct!.servedModels),
  }
}


export function dataDatabricksServingEndpointsEndpointsConfigToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    served_entities: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedEntitiesToHclTerraform, false)(struct!.servedEntities),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList",
    },
    served_models: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigServedModelsToHclTerraform, false)(struct!.servedModels),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigServedModelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servedEntities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servedEntities = this._servedEntities?.internalValue;
    }
    if (this._servedModels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servedModels = this._servedModels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._servedEntities.internalValue = undefined;
      this._servedModels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._servedEntities.internalValue = value.servedEntities;
      this._servedModels.internalValue = value.servedModels;
    }
  }

  // served_entities - computed: true, optional: true, required: false
  private _servedEntities = new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList(this, "served_entities", false);
  public get servedEntities() {
    return this._servedEntities;
  }
  public putServedEntities(value: DataDatabricksServingEndpointsEndpointsConfigServedEntities[] | cdktf.IResolvable) {
    this._servedEntities.internalValue = value;
  }
  public resetServedEntities() {
    this._servedEntities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servedEntitiesInput() {
    return this._servedEntities.internalValue;
  }

  // served_models - computed: true, optional: true, required: false
  private _servedModels = new DataDatabricksServingEndpointsEndpointsConfigServedModelsList(this, "served_models", false);
  public get servedModels() {
    return this._servedModels;
  }
  public putServedModels(value: DataDatabricksServingEndpointsEndpointsConfigServedModels[] | cdktf.IResolvable) {
    this._servedModels.internalValue = value;
  }
  public resetServedModels() {
    this._servedModels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servedModelsInput() {
    return this._servedModels.internalValue;
  }
}

export class DataDatabricksServingEndpointsEndpointsConfigList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsConfig[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsConfigOutputReference {
    return new DataDatabricksServingEndpointsEndpointsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#config_update DataDatabricksServingEndpoints#config_update}
  */
  readonly configUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#ready DataDatabricksServingEndpoints#ready}
  */
  readonly ready?: string;
}

export function dataDatabricksServingEndpointsEndpointsStateToTerraform(struct?: DataDatabricksServingEndpointsEndpointsState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_update: cdktf.stringToTerraform(struct!.configUpdate),
    ready: cdktf.stringToTerraform(struct!.ready),
  }
}


export function dataDatabricksServingEndpointsEndpointsStateToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_update: {
      value: cdktf.stringToHclTerraform(struct!.configUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ready: {
      value: cdktf.stringToHclTerraform(struct!.ready),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.configUpdate = this._configUpdate;
    }
    if (this._ready !== undefined) {
      hasAnyValues = true;
      internalValueResult.ready = this._ready;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configUpdate = undefined;
      this._ready = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configUpdate = value.configUpdate;
      this._ready = value.ready;
    }
  }

  // config_update - computed: true, optional: true, required: false
  private _configUpdate?: string; 
  public get configUpdate() {
    return this.getStringAttribute('config_update');
  }
  public set configUpdate(value: string) {
    this._configUpdate = value;
  }
  public resetConfigUpdate() {
    this._configUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configUpdateInput() {
    return this._configUpdate;
  }

  // ready - computed: true, optional: true, required: false
  private _ready?: string; 
  public get ready() {
    return this.getStringAttribute('ready');
  }
  public set ready(value: string) {
    this._ready = value;
  }
  public resetReady() {
    this._ready = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyInput() {
    return this._ready;
  }
}

export class DataDatabricksServingEndpointsEndpointsStateList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsState[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsStateOutputReference {
    return new DataDatabricksServingEndpointsEndpointsStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpointsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#key DataDatabricksServingEndpoints#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#value DataDatabricksServingEndpoints#value}
  */
  readonly value?: string;
}

export function dataDatabricksServingEndpointsEndpointsTagsToTerraform(struct?: DataDatabricksServingEndpointsEndpointsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksServingEndpointsEndpointsTagsToHclTerraform(struct?: DataDatabricksServingEndpointsEndpointsTags | cdktf.IResolvable): any {
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

export class DataDatabricksServingEndpointsEndpointsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpointsTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksServingEndpointsEndpointsTags | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: false, required: true
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

export class DataDatabricksServingEndpointsEndpointsTagsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpointsTags[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsTagsOutputReference {
    return new DataDatabricksServingEndpointsEndpointsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksServingEndpointsEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#ai_gateway DataDatabricksServingEndpoints#ai_gateway}
  */
  readonly aiGateway?: DataDatabricksServingEndpointsEndpointsAiGateway[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#budget_policy_id DataDatabricksServingEndpoints#budget_policy_id}
  */
  readonly budgetPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#config DataDatabricksServingEndpoints#config}
  */
  readonly config?: DataDatabricksServingEndpointsEndpointsConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#creation_timestamp DataDatabricksServingEndpoints#creation_timestamp}
  */
  readonly creationTimestamp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#creator DataDatabricksServingEndpoints#creator}
  */
  readonly creator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#description DataDatabricksServingEndpoints#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#id DataDatabricksServingEndpoints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#last_updated_timestamp DataDatabricksServingEndpoints#last_updated_timestamp}
  */
  readonly lastUpdatedTimestamp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#state DataDatabricksServingEndpoints#state}
  */
  readonly state?: DataDatabricksServingEndpointsEndpointsState[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#tags DataDatabricksServingEndpoints#tags}
  */
  readonly tags?: DataDatabricksServingEndpointsEndpointsTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#task DataDatabricksServingEndpoints#task}
  */
  readonly task?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#usage_policy_id DataDatabricksServingEndpoints#usage_policy_id}
  */
  readonly usagePolicyId?: string;
}

export function dataDatabricksServingEndpointsEndpointsToTerraform(struct?: DataDatabricksServingEndpointsEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_gateway: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsAiGatewayToTerraform, false)(struct!.aiGateway),
    budget_policy_id: cdktf.stringToTerraform(struct!.budgetPolicyId),
    config: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsConfigToTerraform, false)(struct!.config),
    creation_timestamp: cdktf.numberToTerraform(struct!.creationTimestamp),
    creator: cdktf.stringToTerraform(struct!.creator),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    last_updated_timestamp: cdktf.numberToTerraform(struct!.lastUpdatedTimestamp),
    name: cdktf.stringToTerraform(struct!.name),
    state: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsStateToTerraform, false)(struct!.state),
    tags: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsTagsToTerraform, false)(struct!.tags),
    task: cdktf.stringToTerraform(struct!.task),
    usage_policy_id: cdktf.stringToTerraform(struct!.usagePolicyId),
  }
}


export function dataDatabricksServingEndpointsEndpointsToHclTerraform(struct?: DataDatabricksServingEndpointsEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_gateway: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsAiGatewayToHclTerraform, false)(struct!.aiGateway),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsAiGatewayList",
    },
    budget_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.budgetPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsConfigToHclTerraform, false)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsConfigList",
    },
    creation_timestamp: {
      value: cdktf.numberToHclTerraform(struct!.creationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    creator: {
      value: cdktf.stringToHclTerraform(struct!.creator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_updated_timestamp: {
      value: cdktf.numberToHclTerraform(struct!.lastUpdatedTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsStateToHclTerraform, false)(struct!.state),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsStateList",
    },
    tags: {
      value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksServingEndpointsEndpointsTagsList",
    },
    task: {
      value: cdktf.stringToHclTerraform(struct!.task),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.usagePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServingEndpointsEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServingEndpointsEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiGateway = this._aiGateway?.internalValue;
    }
    if (this._budgetPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.budgetPolicyId = this._budgetPolicyId;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._creationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationTimestamp = this._creationTimestamp;
    }
    if (this._creator !== undefined) {
      hasAnyValues = true;
      internalValueResult.creator = this._creator;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lastUpdatedTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdatedTimestamp = this._lastUpdatedTimestamp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._state?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._task !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task;
    }
    if (this._usagePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.usagePolicyId = this._usagePolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServingEndpointsEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiGateway.internalValue = undefined;
      this._budgetPolicyId = undefined;
      this._config.internalValue = undefined;
      this._creationTimestamp = undefined;
      this._creator = undefined;
      this._description = undefined;
      this._id = undefined;
      this._lastUpdatedTimestamp = undefined;
      this._name = undefined;
      this._state.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._task = undefined;
      this._usagePolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiGateway.internalValue = value.aiGateway;
      this._budgetPolicyId = value.budgetPolicyId;
      this._config.internalValue = value.config;
      this._creationTimestamp = value.creationTimestamp;
      this._creator = value.creator;
      this._description = value.description;
      this._id = value.id;
      this._lastUpdatedTimestamp = value.lastUpdatedTimestamp;
      this._name = value.name;
      this._state.internalValue = value.state;
      this._tags.internalValue = value.tags;
      this._task = value.task;
      this._usagePolicyId = value.usagePolicyId;
    }
  }

  // ai_gateway - computed: true, optional: true, required: false
  private _aiGateway = new DataDatabricksServingEndpointsEndpointsAiGatewayList(this, "ai_gateway", false);
  public get aiGateway() {
    return this._aiGateway;
  }
  public putAiGateway(value: DataDatabricksServingEndpointsEndpointsAiGateway[] | cdktf.IResolvable) {
    this._aiGateway.internalValue = value;
  }
  public resetAiGateway() {
    this._aiGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiGatewayInput() {
    return this._aiGateway.internalValue;
  }

  // budget_policy_id - computed: true, optional: true, required: false
  private _budgetPolicyId?: string; 
  public get budgetPolicyId() {
    return this.getStringAttribute('budget_policy_id');
  }
  public set budgetPolicyId(value: string) {
    this._budgetPolicyId = value;
  }
  public resetBudgetPolicyId() {
    this._budgetPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetPolicyIdInput() {
    return this._budgetPolicyId;
  }

  // config - computed: true, optional: true, required: false
  private _config = new DataDatabricksServingEndpointsEndpointsConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: DataDatabricksServingEndpointsEndpointsConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // creation_timestamp - computed: true, optional: true, required: false
  private _creationTimestamp?: number; 
  public get creationTimestamp() {
    return this.getNumberAttribute('creation_timestamp');
  }
  public set creationTimestamp(value: number) {
    this._creationTimestamp = value;
  }
  public resetCreationTimestamp() {
    this._creationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimestampInput() {
    return this._creationTimestamp;
  }

  // creator - computed: true, optional: true, required: false
  private _creator?: string; 
  public get creator() {
    return this.getStringAttribute('creator');
  }
  public set creator(value: string) {
    this._creator = value;
  }
  public resetCreator() {
    this._creator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorInput() {
    return this._creator;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // last_updated_timestamp - computed: true, optional: true, required: false
  private _lastUpdatedTimestamp?: number; 
  public get lastUpdatedTimestamp() {
    return this.getNumberAttribute('last_updated_timestamp');
  }
  public set lastUpdatedTimestamp(value: number) {
    this._lastUpdatedTimestamp = value;
  }
  public resetLastUpdatedTimestamp() {
    this._lastUpdatedTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedTimestampInput() {
    return this._lastUpdatedTimestamp;
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

  // state - computed: true, optional: true, required: false
  private _state = new DataDatabricksServingEndpointsEndpointsStateList(this, "state", false);
  public get state() {
    return this._state;
  }
  public putState(value: DataDatabricksServingEndpointsEndpointsState[] | cdktf.IResolvable) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DataDatabricksServingEndpointsEndpointsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataDatabricksServingEndpointsEndpointsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // task - computed: true, optional: true, required: false
  private _task?: string; 
  public get task() {
    return this.getStringAttribute('task');
  }
  public set task(value: string) {
    this._task = value;
  }
  public resetTask() {
    this._task = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task;
  }

  // usage_policy_id - computed: true, optional: true, required: false
  private _usagePolicyId?: string; 
  public get usagePolicyId() {
    return this.getStringAttribute('usage_policy_id');
  }
  public set usagePolicyId(value: string) {
    this._usagePolicyId = value;
  }
  public resetUsagePolicyId() {
    this._usagePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePolicyIdInput() {
    return this._usagePolicyId;
  }
}

export class DataDatabricksServingEndpointsEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServingEndpointsEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServingEndpointsEndpointsOutputReference {
    return new DataDatabricksServingEndpointsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints databricks_serving_endpoints}
*/
export class DataDatabricksServingEndpoints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_serving_endpoints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksServingEndpoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksServingEndpoints to import
  * @param importFromId The id of the existing DataDatabricksServingEndpoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksServingEndpoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_serving_endpoints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/serving_endpoints databricks_serving_endpoints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksServingEndpointsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksServingEndpointsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_serving_endpoints',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.90.0',
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
    this._endpoints.internalValue = config.endpoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoints - computed: true, optional: true, required: false
  private _endpoints = new DataDatabricksServingEndpointsEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataDatabricksServingEndpointsEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoints: cdktf.listMapper(dataDatabricksServingEndpointsEndpointsToTerraform, false)(this._endpoints.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoints: {
        value: cdktf.listMapperHcl(dataDatabricksServingEndpointsEndpointsToHclTerraform, false)(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksServingEndpointsEndpointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
