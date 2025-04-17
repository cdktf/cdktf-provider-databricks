// https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ModelServingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#budget_policy_id ModelServing#budget_policy_id}
  */
  readonly budgetPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#id ModelServing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#name ModelServing#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#route_optimized ModelServing#route_optimized}
  */
  readonly routeOptimized?: boolean | cdktf.IResolvable;
  /**
  * ai_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#ai_gateway ModelServing#ai_gateway}
  */
  readonly aiGateway?: ModelServingAiGateway;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#config ModelServing#config}
  */
  readonly config?: ModelServingConfigA;
  /**
  * rate_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#rate_limits ModelServing#rate_limits}
  */
  readonly rateLimits?: ModelServingRateLimits[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#tags ModelServing#tags}
  */
  readonly tags?: ModelServingTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#timeouts ModelServing#timeouts}
  */
  readonly timeouts?: ModelServingTimeouts;
}
export interface ModelServingAiGatewayFallbackConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#enabled ModelServing#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function modelServingAiGatewayFallbackConfigToTerraform(struct?: ModelServingAiGatewayFallbackConfigOutputReference | ModelServingAiGatewayFallbackConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function modelServingAiGatewayFallbackConfigToHclTerraform(struct?: ModelServingAiGatewayFallbackConfigOutputReference | ModelServingAiGatewayFallbackConfig): any {
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

export class ModelServingAiGatewayFallbackConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingAiGatewayFallbackConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingAiGatewayFallbackConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
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
export interface ModelServingAiGatewayGuardrailsInputPii {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#behavior ModelServing#behavior}
  */
  readonly behavior?: string;
}

export function modelServingAiGatewayGuardrailsInputPiiToTerraform(struct?: ModelServingAiGatewayGuardrailsInputPiiOutputReference | ModelServingAiGatewayGuardrailsInputPii): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}


export function modelServingAiGatewayGuardrailsInputPiiToHclTerraform(struct?: ModelServingAiGatewayGuardrailsInputPiiOutputReference | ModelServingAiGatewayGuardrailsInputPii): any {
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

export class ModelServingAiGatewayGuardrailsInputPiiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingAiGatewayGuardrailsInputPii | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingAiGatewayGuardrailsInputPii | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._behavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._behavior = value.behavior;
    }
  }

  // behavior - computed: false, optional: true, required: false
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
export interface ModelServingAiGatewayGuardrailsInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}
  */
  readonly invalidKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#safety ModelServing#safety}
  */
  readonly safety?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}
  */
  readonly validTopics?: string[];
  /**
  * pii block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#pii ModelServing#pii}
  */
  readonly pii?: ModelServingAiGatewayGuardrailsInputPii;
}

export function modelServingAiGatewayGuardrailsInputToTerraform(struct?: ModelServingAiGatewayGuardrailsInputOutputReference | ModelServingAiGatewayGuardrailsInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.invalidKeywords),
    safety: cdktf.booleanToTerraform(struct!.safety),
    valid_topics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validTopics),
    pii: modelServingAiGatewayGuardrailsInputPiiToTerraform(struct!.pii),
  }
}


export function modelServingAiGatewayGuardrailsInputToHclTerraform(struct?: ModelServingAiGatewayGuardrailsInputOutputReference | ModelServingAiGatewayGuardrailsInput): any {
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
    pii: {
      value: modelServingAiGatewayGuardrailsInputPiiToHclTerraform(struct!.pii),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingAiGatewayGuardrailsInputPiiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingAiGatewayGuardrailsInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingAiGatewayGuardrailsInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidKeywords = this._invalidKeywords;
    }
    if (this._safety !== undefined) {
      hasAnyValues = true;
      internalValueResult.safety = this._safety;
    }
    if (this._validTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.validTopics = this._validTopics;
    }
    if (this._pii?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pii = this._pii?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingAiGatewayGuardrailsInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invalidKeywords = undefined;
      this._safety = undefined;
      this._validTopics = undefined;
      this._pii.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invalidKeywords = value.invalidKeywords;
      this._safety = value.safety;
      this._validTopics = value.validTopics;
      this._pii.internalValue = value.pii;
    }
  }

  // invalid_keywords - computed: false, optional: true, required: false
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

  // safety - computed: false, optional: true, required: false
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

  // valid_topics - computed: false, optional: true, required: false
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

  // pii - computed: false, optional: true, required: false
  private _pii = new ModelServingAiGatewayGuardrailsInputPiiOutputReference(this, "pii");
  public get pii() {
    return this._pii;
  }
  public putPii(value: ModelServingAiGatewayGuardrailsInputPii) {
    this._pii.internalValue = value;
  }
  public resetPii() {
    this._pii.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiInput() {
    return this._pii.internalValue;
  }
}
export interface ModelServingAiGatewayGuardrailsOutputPii {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#behavior ModelServing#behavior}
  */
  readonly behavior?: string;
}

export function modelServingAiGatewayGuardrailsOutputPiiToTerraform(struct?: ModelServingAiGatewayGuardrailsOutputPiiOutputReference | ModelServingAiGatewayGuardrailsOutputPii): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}


export function modelServingAiGatewayGuardrailsOutputPiiToHclTerraform(struct?: ModelServingAiGatewayGuardrailsOutputPiiOutputReference | ModelServingAiGatewayGuardrailsOutputPii): any {
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

export class ModelServingAiGatewayGuardrailsOutputPiiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingAiGatewayGuardrailsOutputPii | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingAiGatewayGuardrailsOutputPii | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._behavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._behavior = value.behavior;
    }
  }

  // behavior - computed: false, optional: true, required: false
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
export interface ModelServingAiGatewayGuardrailsOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}
  */
  readonly invalidKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#safety ModelServing#safety}
  */
  readonly safety?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}
  */
  readonly validTopics?: string[];
  /**
  * pii block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#pii ModelServing#pii}
  */
  readonly pii?: ModelServingAiGatewayGuardrailsOutputPii;
}

export function modelServingAiGatewayGuardrailsOutputToTerraform(struct?: ModelServingAiGatewayGuardrailsOutputOutputReference | ModelServingAiGatewayGuardrailsOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.invalidKeywords),
    safety: cdktf.booleanToTerraform(struct!.safety),
    valid_topics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validTopics),
    pii: modelServingAiGatewayGuardrailsOutputPiiToTerraform(struct!.pii),
  }
}


export function modelServingAiGatewayGuardrailsOutputToHclTerraform(struct?: ModelServingAiGatewayGuardrailsOutputOutputReference | ModelServingAiGatewayGuardrailsOutput): any {
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
    pii: {
      value: modelServingAiGatewayGuardrailsOutputPiiToHclTerraform(struct!.pii),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingAiGatewayGuardrailsOutputPiiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingAiGatewayGuardrailsOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingAiGatewayGuardrailsOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidKeywords = this._invalidKeywords;
    }
    if (this._safety !== undefined) {
      hasAnyValues = true;
      internalValueResult.safety = this._safety;
    }
    if (this._validTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.validTopics = this._validTopics;
    }
    if (this._pii?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pii = this._pii?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingAiGatewayGuardrailsOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invalidKeywords = undefined;
      this._safety = undefined;
      this._validTopics = undefined;
      this._pii.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invalidKeywords = value.invalidKeywords;
      this._safety = value.safety;
      this._validTopics = value.validTopics;
      this._pii.internalValue = value.pii;
    }
  }

  // invalid_keywords - computed: false, optional: true, required: false
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

  // safety - computed: false, optional: true, required: false
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

  // valid_topics - computed: false, optional: true, required: false
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

  // pii - computed: false, optional: true, required: false
  private _pii = new ModelServingAiGatewayGuardrailsOutputPiiOutputReference(this, "pii");
  public get pii() {
    return this._pii;
  }
  public putPii(value: ModelServingAiGatewayGuardrailsOutputPii) {
    this._pii.internalValue = value;
  }
  public resetPii() {
    this._pii.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiInput() {
    return this._pii.internalValue;
  }
}
export interface ModelServingAiGatewayGuardrails {
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#input ModelServing#input}
  */
  readonly input?: ModelServingAiGatewayGuardrailsInput;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#output ModelServing#output}
  */
  readonly output?: ModelServingAiGatewayGuardrailsOutput;
}

export function modelServingAiGatewayGuardrailsToTerraform(struct?: ModelServingAiGatewayGuardrailsOutputReference | ModelServingAiGatewayGuardrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: modelServingAiGatewayGuardrailsInputToTerraform(struct!.input),
    output: modelServingAiGatewayGuardrailsOutputToTerraform(struct!.output),
  }
}


export function modelServingAiGatewayGuardrailsToHclTerraform(struct?: ModelServingAiGatewayGuardrailsOutputReference | ModelServingAiGatewayGuardrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input: {
      value: modelServingAiGatewayGuardrailsInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingAiGatewayGuardrailsInputList",
    },
    output: {
      value: modelServingAiGatewayGuardrailsOutputToHclTerraform(struct!.output),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingAiGatewayGuardrailsOutputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingAiGatewayGuardrailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingAiGatewayGuardrails | undefined {
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

  public set internalValue(value: ModelServingAiGatewayGuardrails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._input.internalValue = undefined;
      this._output.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._input.internalValue = value.input;
      this._output.internalValue = value.output;
    }
  }

  // input - computed: false, optional: true, required: false
  private _input = new ModelServingAiGatewayGuardrailsInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: ModelServingAiGatewayGuardrailsInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new ModelServingAiGatewayGuardrailsOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: ModelServingAiGatewayGuardrailsOutput) {
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
export interface ModelServingAiGatewayInferenceTableConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#enabled ModelServing#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#schema_name ModelServing#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}
  */
  readonly tableNamePrefix?: string;
}

export function modelServingAiGatewayInferenceTableConfigToTerraform(struct?: ModelServingAiGatewayInferenceTableConfigOutputReference | ModelServingAiGatewayInferenceTableConfig): any {
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


export function modelServingAiGatewayInferenceTableConfigToHclTerraform(struct?: ModelServingAiGatewayInferenceTableConfigOutputReference | ModelServingAiGatewayInferenceTableConfig): any {
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

export class ModelServingAiGatewayInferenceTableConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingAiGatewayInferenceTableConfig | undefined {
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

  public set internalValue(value: ModelServingAiGatewayInferenceTableConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogName = undefined;
      this._enabled = undefined;
      this._schemaName = undefined;
      this._tableNamePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogName = value.catalogName;
      this._enabled = value.enabled;
      this._schemaName = value.schemaName;
      this._tableNamePrefix = value.tableNamePrefix;
    }
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

  // enabled - computed: false, optional: true, required: false
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

  // schema_name - computed: false, optional: true, required: false
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

  // table_name_prefix - computed: false, optional: true, required: false
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
export interface ModelServingAiGatewayRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#calls ModelServing#calls}
  */
  readonly calls: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#key ModelServing#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}
  */
  readonly renewalPeriod: string;
}

export function modelServingAiGatewayRateLimitsToTerraform(struct?: ModelServingAiGatewayRateLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calls: cdktf.numberToTerraform(struct!.calls),
    key: cdktf.stringToTerraform(struct!.key),
    renewal_period: cdktf.stringToTerraform(struct!.renewalPeriod),
  }
}


export function modelServingAiGatewayRateLimitsToHclTerraform(struct?: ModelServingAiGatewayRateLimits | cdktf.IResolvable): any {
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
    renewal_period: {
      value: cdktf.stringToHclTerraform(struct!.renewalPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingAiGatewayRateLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ModelServingAiGatewayRateLimits | cdktf.IResolvable | undefined {
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
    if (this._renewalPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewalPeriod = this._renewalPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingAiGatewayRateLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calls = undefined;
      this._key = undefined;
      this._renewalPeriod = undefined;
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
      this._renewalPeriod = value.renewalPeriod;
    }
  }

  // calls - computed: false, optional: false, required: true
  private _calls?: number; 
  public get calls() {
    return this.getNumberAttribute('calls');
  }
  public set calls(value: number) {
    this._calls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callsInput() {
    return this._calls;
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

  // renewal_period - computed: false, optional: false, required: true
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
}

export class ModelServingAiGatewayRateLimitsList extends cdktf.ComplexList {
  public internalValue? : ModelServingAiGatewayRateLimits[] | cdktf.IResolvable

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
  public get(index: number): ModelServingAiGatewayRateLimitsOutputReference {
    return new ModelServingAiGatewayRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelServingAiGatewayUsageTrackingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#enabled ModelServing#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function modelServingAiGatewayUsageTrackingConfigToTerraform(struct?: ModelServingAiGatewayUsageTrackingConfigOutputReference | ModelServingAiGatewayUsageTrackingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function modelServingAiGatewayUsageTrackingConfigToHclTerraform(struct?: ModelServingAiGatewayUsageTrackingConfigOutputReference | ModelServingAiGatewayUsageTrackingConfig): any {
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

export class ModelServingAiGatewayUsageTrackingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingAiGatewayUsageTrackingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingAiGatewayUsageTrackingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
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
export interface ModelServingAiGateway {
  /**
  * fallback_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#fallback_config ModelServing#fallback_config}
  */
  readonly fallbackConfig?: ModelServingAiGatewayFallbackConfig;
  /**
  * guardrails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#guardrails ModelServing#guardrails}
  */
  readonly guardrails?: ModelServingAiGatewayGuardrails;
  /**
  * inference_table_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#inference_table_config ModelServing#inference_table_config}
  */
  readonly inferenceTableConfig?: ModelServingAiGatewayInferenceTableConfig;
  /**
  * rate_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#rate_limits ModelServing#rate_limits}
  */
  readonly rateLimits?: ModelServingAiGatewayRateLimits[] | cdktf.IResolvable;
  /**
  * usage_tracking_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#usage_tracking_config ModelServing#usage_tracking_config}
  */
  readonly usageTrackingConfig?: ModelServingAiGatewayUsageTrackingConfig;
}

export function modelServingAiGatewayToTerraform(struct?: ModelServingAiGatewayOutputReference | ModelServingAiGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_config: modelServingAiGatewayFallbackConfigToTerraform(struct!.fallbackConfig),
    guardrails: modelServingAiGatewayGuardrailsToTerraform(struct!.guardrails),
    inference_table_config: modelServingAiGatewayInferenceTableConfigToTerraform(struct!.inferenceTableConfig),
    rate_limits: cdktf.listMapper(modelServingAiGatewayRateLimitsToTerraform, true)(struct!.rateLimits),
    usage_tracking_config: modelServingAiGatewayUsageTrackingConfigToTerraform(struct!.usageTrackingConfig),
  }
}


export function modelServingAiGatewayToHclTerraform(struct?: ModelServingAiGatewayOutputReference | ModelServingAiGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_config: {
      value: modelServingAiGatewayFallbackConfigToHclTerraform(struct!.fallbackConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingAiGatewayFallbackConfigList",
    },
    guardrails: {
      value: modelServingAiGatewayGuardrailsToHclTerraform(struct!.guardrails),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingAiGatewayGuardrailsList",
    },
    inference_table_config: {
      value: modelServingAiGatewayInferenceTableConfigToHclTerraform(struct!.inferenceTableConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingAiGatewayInferenceTableConfigList",
    },
    rate_limits: {
      value: cdktf.listMapperHcl(modelServingAiGatewayRateLimitsToHclTerraform, true)(struct!.rateLimits),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingAiGatewayRateLimitsList",
    },
    usage_tracking_config: {
      value: modelServingAiGatewayUsageTrackingConfigToHclTerraform(struct!.usageTrackingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingAiGatewayUsageTrackingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingAiGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingAiGateway | undefined {
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

  public set internalValue(value: ModelServingAiGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallbackConfig.internalValue = undefined;
      this._guardrails.internalValue = undefined;
      this._inferenceTableConfig.internalValue = undefined;
      this._rateLimits.internalValue = undefined;
      this._usageTrackingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallbackConfig.internalValue = value.fallbackConfig;
      this._guardrails.internalValue = value.guardrails;
      this._inferenceTableConfig.internalValue = value.inferenceTableConfig;
      this._rateLimits.internalValue = value.rateLimits;
      this._usageTrackingConfig.internalValue = value.usageTrackingConfig;
    }
  }

  // fallback_config - computed: false, optional: true, required: false
  private _fallbackConfig = new ModelServingAiGatewayFallbackConfigOutputReference(this, "fallback_config");
  public get fallbackConfig() {
    return this._fallbackConfig;
  }
  public putFallbackConfig(value: ModelServingAiGatewayFallbackConfig) {
    this._fallbackConfig.internalValue = value;
  }
  public resetFallbackConfig() {
    this._fallbackConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackConfigInput() {
    return this._fallbackConfig.internalValue;
  }

  // guardrails - computed: false, optional: true, required: false
  private _guardrails = new ModelServingAiGatewayGuardrailsOutputReference(this, "guardrails");
  public get guardrails() {
    return this._guardrails;
  }
  public putGuardrails(value: ModelServingAiGatewayGuardrails) {
    this._guardrails.internalValue = value;
  }
  public resetGuardrails() {
    this._guardrails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailsInput() {
    return this._guardrails.internalValue;
  }

  // inference_table_config - computed: false, optional: true, required: false
  private _inferenceTableConfig = new ModelServingAiGatewayInferenceTableConfigOutputReference(this, "inference_table_config");
  public get inferenceTableConfig() {
    return this._inferenceTableConfig;
  }
  public putInferenceTableConfig(value: ModelServingAiGatewayInferenceTableConfig) {
    this._inferenceTableConfig.internalValue = value;
  }
  public resetInferenceTableConfig() {
    this._inferenceTableConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceTableConfigInput() {
    return this._inferenceTableConfig.internalValue;
  }

  // rate_limits - computed: false, optional: true, required: false
  private _rateLimits = new ModelServingAiGatewayRateLimitsList(this, "rate_limits", false);
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: ModelServingAiGatewayRateLimits[] | cdktf.IResolvable) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }

  // usage_tracking_config - computed: false, optional: true, required: false
  private _usageTrackingConfig = new ModelServingAiGatewayUsageTrackingConfigOutputReference(this, "usage_tracking_config");
  public get usageTrackingConfig() {
    return this._usageTrackingConfig;
  }
  public putUsageTrackingConfig(value: ModelServingAiGatewayUsageTrackingConfig) {
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
export interface ModelServingConfigAutoCaptureConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#enabled ModelServing#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#schema_name ModelServing#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}
  */
  readonly tableNamePrefix?: string;
}

export function modelServingConfigAutoCaptureConfigToTerraform(struct?: ModelServingConfigAutoCaptureConfigOutputReference | ModelServingConfigAutoCaptureConfig): any {
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


export function modelServingConfigAutoCaptureConfigToHclTerraform(struct?: ModelServingConfigAutoCaptureConfigOutputReference | ModelServingConfigAutoCaptureConfig): any {
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

export class ModelServingConfigAutoCaptureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigAutoCaptureConfig | undefined {
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

  public set internalValue(value: ModelServingConfigAutoCaptureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogName = undefined;
      this._enabled = undefined;
      this._schemaName = undefined;
      this._tableNamePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogName = value.catalogName;
      this._enabled = value.enabled;
      this._schemaName = value.schemaName;
      this._tableNamePrefix = value.tableNamePrefix;
    }
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

  // schema_name - computed: false, optional: true, required: false
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
export interface ModelServingConfigServedEntitiesExternalModelAi21LabsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#ai21labs_api_key ModelServing#ai21labs_api_key}
  */
  readonly ai21LabsApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#ai21labs_api_key_plaintext ModelServing#ai21labs_api_key_plaintext}
  */
  readonly ai21LabsApiKeyPlaintext?: string;
}

export function modelServingConfigServedEntitiesExternalModelAi21LabsConfigToTerraform(struct?: ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference | ModelServingConfigServedEntitiesExternalModelAi21LabsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai21labs_api_key: cdktf.stringToTerraform(struct!.ai21LabsApiKey),
    ai21labs_api_key_plaintext: cdktf.stringToTerraform(struct!.ai21LabsApiKeyPlaintext),
  }
}


export function modelServingConfigServedEntitiesExternalModelAi21LabsConfigToHclTerraform(struct?: ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference | ModelServingConfigServedEntitiesExternalModelAi21LabsConfig): any {
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

export class ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigServedEntitiesExternalModelAi21LabsConfig | undefined {
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

  public set internalValue(value: ModelServingConfigServedEntitiesExternalModelAi21LabsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ai21LabsApiKey = undefined;
      this._ai21LabsApiKeyPlaintext = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ai21LabsApiKey = value.ai21LabsApiKey;
      this._ai21LabsApiKeyPlaintext = value.ai21LabsApiKeyPlaintext;
    }
  }

  // ai21labs_api_key - computed: false, optional: true, required: false
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

  // ai21labs_api_key_plaintext - computed: false, optional: true, required: false
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
export interface ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#aws_access_key_id ModelServing#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#aws_access_key_id_plaintext ModelServing#aws_access_key_id_plaintext}
  */
  readonly awsAccessKeyIdPlaintext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#aws_region ModelServing#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#aws_secret_access_key ModelServing#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#aws_secret_access_key_plaintext ModelServing#aws_secret_access_key_plaintext}
  */
  readonly awsSecretAccessKeyPlaintext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#bedrock_provider ModelServing#bedrock_provider}
  */
  readonly bedrockProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
}

export function modelServingConfigServedEntitiesExternalModelAmazonBedrockConfigToTerraform(struct?: ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference | ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig): any {
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


export function modelServingConfigServedEntitiesExternalModelAmazonBedrockConfigToHclTerraform(struct?: ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference | ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig): any {
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

export class ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig | undefined {
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

  public set internalValue(value: ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsAccessKeyId = undefined;
      this._awsAccessKeyIdPlaintext = undefined;
      this._awsRegion = undefined;
      this._awsSecretAccessKey = undefined;
      this._awsSecretAccessKeyPlaintext = undefined;
      this._bedrockProvider = undefined;
      this._instanceProfileArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsAccessKeyIdPlaintext = value.awsAccessKeyIdPlaintext;
      this._awsRegion = value.awsRegion;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
      this._awsSecretAccessKeyPlaintext = value.awsSecretAccessKeyPlaintext;
      this._bedrockProvider = value.bedrockProvider;
      this._instanceProfileArn = value.instanceProfileArn;
    }
  }

  // aws_access_key_id - computed: false, optional: true, required: false
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

  // aws_access_key_id_plaintext - computed: false, optional: true, required: false
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

  // aws_region - computed: false, optional: false, required: true
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

  // aws_secret_access_key - computed: false, optional: true, required: false
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

  // aws_secret_access_key_plaintext - computed: false, optional: true, required: false
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

  // bedrock_provider - computed: false, optional: false, required: true
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
}
export interface ModelServingConfigServedEntitiesExternalModelAnthropicConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#anthropic_api_key ModelServing#anthropic_api_key}
  */
  readonly anthropicApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#anthropic_api_key_plaintext ModelServing#anthropic_api_key_plaintext}
  */
  readonly anthropicApiKeyPlaintext?: string;
}

export function modelServingConfigServedEntitiesExternalModelAnthropicConfigToTerraform(struct?: ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference | ModelServingConfigServedEntitiesExternalModelAnthropicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anthropic_api_key: cdktf.stringToTerraform(struct!.anthropicApiKey),
    anthropic_api_key_plaintext: cdktf.stringToTerraform(struct!.anthropicApiKeyPlaintext),
  }
}


export function modelServingConfigServedEntitiesExternalModelAnthropicConfigToHclTerraform(struct?: ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference | ModelServingConfigServedEntitiesExternalModelAnthropicConfig): any {
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

export class ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigServedEntitiesExternalModelAnthropicConfig | undefined {
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

  public set internalValue(value: ModelServingConfigServedEntitiesExternalModelAnthropicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anthropicApiKey = undefined;
      this._anthropicApiKeyPlaintext = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anthropicApiKey = value.anthropicApiKey;
      this._anthropicApiKeyPlaintext = value.anthropicApiKeyPlaintext;
    }
  }

  // anthropic_api_key - computed: false, optional: true, required: false
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

  // anthropic_api_key_plaintext - computed: false, optional: true, required: false
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
export interface ModelServingConfigServedEntitiesExternalModelCohereConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#cohere_api_base ModelServing#cohere_api_base}
  */
  readonly cohereApiBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#cohere_api_key ModelServing#cohere_api_key}
  */
  readonly cohereApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#cohere_api_key_plaintext ModelServing#cohere_api_key_plaintext}
  */
  readonly cohereApiKeyPlaintext?: string;
}

export function modelServingConfigServedEntitiesExternalModelCohereConfigToTerraform(struct?: ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference | ModelServingConfigServedEntitiesExternalModelCohereConfig): any {
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


export function modelServingConfigServedEntitiesExternalModelCohereConfigToHclTerraform(struct?: ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference | ModelServingConfigServedEntitiesExternalModelCohereConfig): any {
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

export class ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigServedEntitiesExternalModelCohereConfig | undefined {
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

  public set internalValue(value: ModelServingConfigServedEntitiesExternalModelCohereConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cohereApiBase = undefined;
      this._cohereApiKey = undefined;
      this._cohereApiKeyPlaintext = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cohereApiBase = value.cohereApiBase;
      this._cohereApiKey = value.cohereApiKey;
      this._cohereApiKeyPlaintext = value.cohereApiKeyPlaintext;
    }
  }

  // cohere_api_base - computed: false, optional: true, required: false
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

  // cohere_api_key - computed: false, optional: true, required: false
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

  // cohere_api_key_plaintext - computed: false, optional: true, required: false
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
export interface ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#key ModelServing#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#value ModelServing#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#value_plaintext ModelServing#value_plaintext}
  */
  readonly valuePlaintext?: string;
}

export function modelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthToTerraform(struct?: ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference | ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth): any {
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


export function modelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthToHclTerraform(struct?: ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference | ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth): any {
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

export class ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth | undefined {
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

  public set internalValue(value: ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
      this._valuePlaintext = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
      this._valuePlaintext = value.valuePlaintext;
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

  // value_plaintext - computed: false, optional: true, required: false
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
export interface ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#token ModelServing#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#token_plaintext ModelServing#token_plaintext}
  */
  readonly tokenPlaintext?: string;
}

export function modelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthToTerraform(struct?: ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference | ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
    token_plaintext: cdktf.stringToTerraform(struct!.tokenPlaintext),
  }
}


export function modelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthToHclTerraform(struct?: ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference | ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth): any {
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

export class ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth | undefined {
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

  public set internalValue(value: ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
      this._tokenPlaintext = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
      this._tokenPlaintext = value.tokenPlaintext;
    }
  }

  // token - computed: false, optional: true, required: false
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

  // token_plaintext - computed: false, optional: true, required: false
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
export interface ModelServingConfigServedEntitiesExternalModelCustomProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#custom_provider_url ModelServing#custom_provider_url}
  */
  readonly customProviderUrl: string;
  /**
  * api_key_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#api_key_auth ModelServing#api_key_auth}
  */
  readonly apiKeyAuth?: ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth;
  /**
  * bearer_token_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#bearer_token_auth ModelServing#bearer_token_auth}
  */
  readonly bearerTokenAuth?: ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth;
}

export function modelServingConfigServedEntitiesExternalModelCustomProviderConfigToTerraform(struct?: ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference | ModelServingConfigServedEntitiesExternalModelCustomProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_provider_url: cdktf.stringToTerraform(struct!.customProviderUrl),
    api_key_auth: modelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthToTerraform(struct!.apiKeyAuth),
    bearer_token_auth: modelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthToTerraform(struct!.bearerTokenAuth),
  }
}


export function modelServingConfigServedEntitiesExternalModelCustomProviderConfigToHclTerraform(struct?: ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference | ModelServingConfigServedEntitiesExternalModelCustomProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_provider_url: {
      value: cdktf.stringToHclTerraform(struct!.customProviderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_auth: {
      value: modelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthToHclTerraform(struct!.apiKeyAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthList",
    },
    bearer_token_auth: {
      value: modelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthToHclTerraform(struct!.bearerTokenAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigServedEntitiesExternalModelCustomProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customProviderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProviderUrl = this._customProviderUrl;
    }
    if (this._apiKeyAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAuth = this._apiKeyAuth?.internalValue;
    }
    if (this._bearerTokenAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenAuth = this._bearerTokenAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingConfigServedEntitiesExternalModelCustomProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customProviderUrl = undefined;
      this._apiKeyAuth.internalValue = undefined;
      this._bearerTokenAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customProviderUrl = value.customProviderUrl;
      this._apiKeyAuth.internalValue = value.apiKeyAuth;
      this._bearerTokenAuth.internalValue = value.bearerTokenAuth;
    }
  }

  // custom_provider_url - computed: false, optional: false, required: true
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

  // api_key_auth - computed: false, optional: true, required: false
  private _apiKeyAuth = new ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference(this, "api_key_auth");
  public get apiKeyAuth() {
    return this._apiKeyAuth;
  }
  public putApiKeyAuth(value: ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth) {
    this._apiKeyAuth.internalValue = value;
  }
  public resetApiKeyAuth() {
    this._apiKeyAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAuthInput() {
    return this._apiKeyAuth.internalValue;
  }

  // bearer_token_auth - computed: false, optional: true, required: false
  private _bearerTokenAuth = new ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference(this, "bearer_token_auth");
  public get bearerTokenAuth() {
    return this._bearerTokenAuth;
  }
  public putBearerTokenAuth(value: ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth) {
    this._bearerTokenAuth.internalValue = value;
  }
  public resetBearerTokenAuth() {
    this._bearerTokenAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenAuthInput() {
    return this._bearerTokenAuth.internalValue;
  }
}
export interface ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#databricks_api_token ModelServing#databricks_api_token}
  */
  readonly databricksApiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#databricks_api_token_plaintext ModelServing#databricks_api_token_plaintext}
  */
  readonly databricksApiTokenPlaintext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#databricks_workspace_url ModelServing#databricks_workspace_url}
  */
  readonly databricksWorkspaceUrl: string;
}

export function modelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigToTerraform(struct?: ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference | ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig): any {
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


export function modelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigToHclTerraform(struct?: ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference | ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig): any {
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

export class ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig | undefined {
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

  public set internalValue(value: ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databricksApiToken = undefined;
      this._databricksApiTokenPlaintext = undefined;
      this._databricksWorkspaceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databricksApiToken = value.databricksApiToken;
      this._databricksApiTokenPlaintext = value.databricksApiTokenPlaintext;
      this._databricksWorkspaceUrl = value.databricksWorkspaceUrl;
    }
  }

  // databricks_api_token - computed: false, optional: true, required: false
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

  // databricks_api_token_plaintext - computed: false, optional: true, required: false
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

  // databricks_workspace_url - computed: false, optional: false, required: true
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
export interface ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#private_key ModelServing#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#private_key_plaintext ModelServing#private_key_plaintext}
  */
  readonly privateKeyPlaintext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#project_id ModelServing#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#region ModelServing#region}
  */
  readonly region: string;
}

export function modelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigToTerraform(struct?: ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference | ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig): any {
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


export function modelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigToHclTerraform(struct?: ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference | ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig): any {
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

export class ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig | undefined {
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

  public set internalValue(value: ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
      this._privateKeyPlaintext = undefined;
      this._projectId = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
      this._privateKeyPlaintext = value.privateKeyPlaintext;
      this._projectId = value.projectId;
      this._region = value.region;
    }
  }

  // private_key - computed: false, optional: true, required: false
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

  // private_key_plaintext - computed: false, optional: true, required: false
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

  // project_id - computed: false, optional: false, required: true
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

  // region - computed: false, optional: false, required: true
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
export interface ModelServingConfigServedEntitiesExternalModelOpenaiConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#microsoft_entra_client_id ModelServing#microsoft_entra_client_id}
  */
  readonly microsoftEntraClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#microsoft_entra_client_secret ModelServing#microsoft_entra_client_secret}
  */
  readonly microsoftEntraClientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#microsoft_entra_client_secret_plaintext ModelServing#microsoft_entra_client_secret_plaintext}
  */
  readonly microsoftEntraClientSecretPlaintext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#microsoft_entra_tenant_id ModelServing#microsoft_entra_tenant_id}
  */
  readonly microsoftEntraTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#openai_api_base ModelServing#openai_api_base}
  */
  readonly openaiApiBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#openai_api_key ModelServing#openai_api_key}
  */
  readonly openaiApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#openai_api_key_plaintext ModelServing#openai_api_key_plaintext}
  */
  readonly openaiApiKeyPlaintext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#openai_api_type ModelServing#openai_api_type}
  */
  readonly openaiApiType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#openai_api_version ModelServing#openai_api_version}
  */
  readonly openaiApiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#openai_deployment_name ModelServing#openai_deployment_name}
  */
  readonly openaiDeploymentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#openai_organization ModelServing#openai_organization}
  */
  readonly openaiOrganization?: string;
}

export function modelServingConfigServedEntitiesExternalModelOpenaiConfigToTerraform(struct?: ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference | ModelServingConfigServedEntitiesExternalModelOpenaiConfig): any {
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


export function modelServingConfigServedEntitiesExternalModelOpenaiConfigToHclTerraform(struct?: ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference | ModelServingConfigServedEntitiesExternalModelOpenaiConfig): any {
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

export class ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigServedEntitiesExternalModelOpenaiConfig | undefined {
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

  public set internalValue(value: ModelServingConfigServedEntitiesExternalModelOpenaiConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // microsoft_entra_client_id - computed: false, optional: true, required: false
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

  // microsoft_entra_client_secret - computed: false, optional: true, required: false
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

  // microsoft_entra_client_secret_plaintext - computed: false, optional: true, required: false
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

  // microsoft_entra_tenant_id - computed: false, optional: true, required: false
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

  // openai_api_base - computed: false, optional: true, required: false
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

  // openai_api_key - computed: false, optional: true, required: false
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

  // openai_api_key_plaintext - computed: false, optional: true, required: false
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

  // openai_api_type - computed: false, optional: true, required: false
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

  // openai_api_version - computed: false, optional: true, required: false
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

  // openai_deployment_name - computed: false, optional: true, required: false
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

  // openai_organization - computed: false, optional: true, required: false
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
export interface ModelServingConfigServedEntitiesExternalModelPalmConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#palm_api_key ModelServing#palm_api_key}
  */
  readonly palmApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#palm_api_key_plaintext ModelServing#palm_api_key_plaintext}
  */
  readonly palmApiKeyPlaintext?: string;
}

export function modelServingConfigServedEntitiesExternalModelPalmConfigToTerraform(struct?: ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference | ModelServingConfigServedEntitiesExternalModelPalmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    palm_api_key: cdktf.stringToTerraform(struct!.palmApiKey),
    palm_api_key_plaintext: cdktf.stringToTerraform(struct!.palmApiKeyPlaintext),
  }
}


export function modelServingConfigServedEntitiesExternalModelPalmConfigToHclTerraform(struct?: ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference | ModelServingConfigServedEntitiesExternalModelPalmConfig): any {
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

export class ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigServedEntitiesExternalModelPalmConfig | undefined {
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

  public set internalValue(value: ModelServingConfigServedEntitiesExternalModelPalmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._palmApiKey = undefined;
      this._palmApiKeyPlaintext = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._palmApiKey = value.palmApiKey;
      this._palmApiKeyPlaintext = value.palmApiKeyPlaintext;
    }
  }

  // palm_api_key - computed: false, optional: true, required: false
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

  // palm_api_key_plaintext - computed: false, optional: true, required: false
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
export interface ModelServingConfigServedEntitiesExternalModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#name ModelServing#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#provider ModelServing#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#task ModelServing#task}
  */
  readonly task: string;
  /**
  * ai21labs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#ai21labs_config ModelServing#ai21labs_config}
  */
  readonly ai21LabsConfig?: ModelServingConfigServedEntitiesExternalModelAi21LabsConfig;
  /**
  * amazon_bedrock_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#amazon_bedrock_config ModelServing#amazon_bedrock_config}
  */
  readonly amazonBedrockConfig?: ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig;
  /**
  * anthropic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#anthropic_config ModelServing#anthropic_config}
  */
  readonly anthropicConfig?: ModelServingConfigServedEntitiesExternalModelAnthropicConfig;
  /**
  * cohere_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#cohere_config ModelServing#cohere_config}
  */
  readonly cohereConfig?: ModelServingConfigServedEntitiesExternalModelCohereConfig;
  /**
  * custom_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#custom_provider_config ModelServing#custom_provider_config}
  */
  readonly customProviderConfig?: ModelServingConfigServedEntitiesExternalModelCustomProviderConfig;
  /**
  * databricks_model_serving_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#databricks_model_serving_config ModelServing#databricks_model_serving_config}
  */
  readonly databricksModelServingConfig?: ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig;
  /**
  * google_cloud_vertex_ai_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#google_cloud_vertex_ai_config ModelServing#google_cloud_vertex_ai_config}
  */
  readonly googleCloudVertexAiConfig?: ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig;
  /**
  * openai_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#openai_config ModelServing#openai_config}
  */
  readonly openaiConfig?: ModelServingConfigServedEntitiesExternalModelOpenaiConfig;
  /**
  * palm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#palm_config ModelServing#palm_config}
  */
  readonly palmConfig?: ModelServingConfigServedEntitiesExternalModelPalmConfig;
}

export function modelServingConfigServedEntitiesExternalModelToTerraform(struct?: ModelServingConfigServedEntitiesExternalModelOutputReference | ModelServingConfigServedEntitiesExternalModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    provider: cdktf.stringToTerraform(struct!.provider),
    task: cdktf.stringToTerraform(struct!.task),
    ai21labs_config: modelServingConfigServedEntitiesExternalModelAi21LabsConfigToTerraform(struct!.ai21LabsConfig),
    amazon_bedrock_config: modelServingConfigServedEntitiesExternalModelAmazonBedrockConfigToTerraform(struct!.amazonBedrockConfig),
    anthropic_config: modelServingConfigServedEntitiesExternalModelAnthropicConfigToTerraform(struct!.anthropicConfig),
    cohere_config: modelServingConfigServedEntitiesExternalModelCohereConfigToTerraform(struct!.cohereConfig),
    custom_provider_config: modelServingConfigServedEntitiesExternalModelCustomProviderConfigToTerraform(struct!.customProviderConfig),
    databricks_model_serving_config: modelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigToTerraform(struct!.databricksModelServingConfig),
    google_cloud_vertex_ai_config: modelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigToTerraform(struct!.googleCloudVertexAiConfig),
    openai_config: modelServingConfigServedEntitiesExternalModelOpenaiConfigToTerraform(struct!.openaiConfig),
    palm_config: modelServingConfigServedEntitiesExternalModelPalmConfigToTerraform(struct!.palmConfig),
  }
}


export function modelServingConfigServedEntitiesExternalModelToHclTerraform(struct?: ModelServingConfigServedEntitiesExternalModelOutputReference | ModelServingConfigServedEntitiesExternalModel): any {
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
    ai21labs_config: {
      value: modelServingConfigServedEntitiesExternalModelAi21LabsConfigToHclTerraform(struct!.ai21LabsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedEntitiesExternalModelAi21LabsConfigList",
    },
    amazon_bedrock_config: {
      value: modelServingConfigServedEntitiesExternalModelAmazonBedrockConfigToHclTerraform(struct!.amazonBedrockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigList",
    },
    anthropic_config: {
      value: modelServingConfigServedEntitiesExternalModelAnthropicConfigToHclTerraform(struct!.anthropicConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedEntitiesExternalModelAnthropicConfigList",
    },
    cohere_config: {
      value: modelServingConfigServedEntitiesExternalModelCohereConfigToHclTerraform(struct!.cohereConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedEntitiesExternalModelCohereConfigList",
    },
    custom_provider_config: {
      value: modelServingConfigServedEntitiesExternalModelCustomProviderConfigToHclTerraform(struct!.customProviderConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedEntitiesExternalModelCustomProviderConfigList",
    },
    databricks_model_serving_config: {
      value: modelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigToHclTerraform(struct!.databricksModelServingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigList",
    },
    google_cloud_vertex_ai_config: {
      value: modelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigToHclTerraform(struct!.googleCloudVertexAiConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList",
    },
    openai_config: {
      value: modelServingConfigServedEntitiesExternalModelOpenaiConfigToHclTerraform(struct!.openaiConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedEntitiesExternalModelOpenaiConfigList",
    },
    palm_config: {
      value: modelServingConfigServedEntitiesExternalModelPalmConfigToHclTerraform(struct!.palmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedEntitiesExternalModelPalmConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingConfigServedEntitiesExternalModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigServedEntitiesExternalModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._task !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task;
    }
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
    if (this._openaiConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiConfig = this._openaiConfig?.internalValue;
    }
    if (this._palmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.palmConfig = this._palmConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingConfigServedEntitiesExternalModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._provider = undefined;
      this._task = undefined;
      this._ai21LabsConfig.internalValue = undefined;
      this._amazonBedrockConfig.internalValue = undefined;
      this._anthropicConfig.internalValue = undefined;
      this._cohereConfig.internalValue = undefined;
      this._customProviderConfig.internalValue = undefined;
      this._databricksModelServingConfig.internalValue = undefined;
      this._googleCloudVertexAiConfig.internalValue = undefined;
      this._openaiConfig.internalValue = undefined;
      this._palmConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._provider = value.provider;
      this._task = value.task;
      this._ai21LabsConfig.internalValue = value.ai21LabsConfig;
      this._amazonBedrockConfig.internalValue = value.amazonBedrockConfig;
      this._anthropicConfig.internalValue = value.anthropicConfig;
      this._cohereConfig.internalValue = value.cohereConfig;
      this._customProviderConfig.internalValue = value.customProviderConfig;
      this._databricksModelServingConfig.internalValue = value.databricksModelServingConfig;
      this._googleCloudVertexAiConfig.internalValue = value.googleCloudVertexAiConfig;
      this._openaiConfig.internalValue = value.openaiConfig;
      this._palmConfig.internalValue = value.palmConfig;
    }
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

  // provider - computed: false, optional: false, required: true
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

  // task - computed: false, optional: false, required: true
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

  // ai21labs_config - computed: false, optional: true, required: false
  private _ai21LabsConfig = new ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference(this, "ai21labs_config");
  public get ai21LabsConfig() {
    return this._ai21LabsConfig;
  }
  public putAi21LabsConfig(value: ModelServingConfigServedEntitiesExternalModelAi21LabsConfig) {
    this._ai21LabsConfig.internalValue = value;
  }
  public resetAi21LabsConfig() {
    this._ai21LabsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ai21LabsConfigInput() {
    return this._ai21LabsConfig.internalValue;
  }

  // amazon_bedrock_config - computed: false, optional: true, required: false
  private _amazonBedrockConfig = new ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference(this, "amazon_bedrock_config");
  public get amazonBedrockConfig() {
    return this._amazonBedrockConfig;
  }
  public putAmazonBedrockConfig(value: ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig) {
    this._amazonBedrockConfig.internalValue = value;
  }
  public resetAmazonBedrockConfig() {
    this._amazonBedrockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonBedrockConfigInput() {
    return this._amazonBedrockConfig.internalValue;
  }

  // anthropic_config - computed: false, optional: true, required: false
  private _anthropicConfig = new ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference(this, "anthropic_config");
  public get anthropicConfig() {
    return this._anthropicConfig;
  }
  public putAnthropicConfig(value: ModelServingConfigServedEntitiesExternalModelAnthropicConfig) {
    this._anthropicConfig.internalValue = value;
  }
  public resetAnthropicConfig() {
    this._anthropicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicConfigInput() {
    return this._anthropicConfig.internalValue;
  }

  // cohere_config - computed: false, optional: true, required: false
  private _cohereConfig = new ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference(this, "cohere_config");
  public get cohereConfig() {
    return this._cohereConfig;
  }
  public putCohereConfig(value: ModelServingConfigServedEntitiesExternalModelCohereConfig) {
    this._cohereConfig.internalValue = value;
  }
  public resetCohereConfig() {
    this._cohereConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cohereConfigInput() {
    return this._cohereConfig.internalValue;
  }

  // custom_provider_config - computed: false, optional: true, required: false
  private _customProviderConfig = new ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference(this, "custom_provider_config");
  public get customProviderConfig() {
    return this._customProviderConfig;
  }
  public putCustomProviderConfig(value: ModelServingConfigServedEntitiesExternalModelCustomProviderConfig) {
    this._customProviderConfig.internalValue = value;
  }
  public resetCustomProviderConfig() {
    this._customProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProviderConfigInput() {
    return this._customProviderConfig.internalValue;
  }

  // databricks_model_serving_config - computed: false, optional: true, required: false
  private _databricksModelServingConfig = new ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference(this, "databricks_model_serving_config");
  public get databricksModelServingConfig() {
    return this._databricksModelServingConfig;
  }
  public putDatabricksModelServingConfig(value: ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig) {
    this._databricksModelServingConfig.internalValue = value;
  }
  public resetDatabricksModelServingConfig() {
    this._databricksModelServingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksModelServingConfigInput() {
    return this._databricksModelServingConfig.internalValue;
  }

  // google_cloud_vertex_ai_config - computed: false, optional: true, required: false
  private _googleCloudVertexAiConfig = new ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference(this, "google_cloud_vertex_ai_config");
  public get googleCloudVertexAiConfig() {
    return this._googleCloudVertexAiConfig;
  }
  public putGoogleCloudVertexAiConfig(value: ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig) {
    this._googleCloudVertexAiConfig.internalValue = value;
  }
  public resetGoogleCloudVertexAiConfig() {
    this._googleCloudVertexAiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudVertexAiConfigInput() {
    return this._googleCloudVertexAiConfig.internalValue;
  }

  // openai_config - computed: false, optional: true, required: false
  private _openaiConfig = new ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference(this, "openai_config");
  public get openaiConfig() {
    return this._openaiConfig;
  }
  public putOpenaiConfig(value: ModelServingConfigServedEntitiesExternalModelOpenaiConfig) {
    this._openaiConfig.internalValue = value;
  }
  public resetOpenaiConfig() {
    this._openaiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiConfigInput() {
    return this._openaiConfig.internalValue;
  }

  // palm_config - computed: false, optional: true, required: false
  private _palmConfig = new ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference(this, "palm_config");
  public get palmConfig() {
    return this._palmConfig;
  }
  public putPalmConfig(value: ModelServingConfigServedEntitiesExternalModelPalmConfig) {
    this._palmConfig.internalValue = value;
  }
  public resetPalmConfig() {
    this._palmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get palmConfigInput() {
    return this._palmConfig.internalValue;
  }
}
export interface ModelServingConfigServedEntities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#entity_name ModelServing#entity_name}
  */
  readonly entityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#entity_version ModelServing#entity_version}
  */
  readonly entityVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}
  */
  readonly environmentVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}
  */
  readonly maxProvisionedThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}
  */
  readonly minProvisionedThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#name ModelServing#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}
  */
  readonly scaleToZeroEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#workload_size ModelServing#workload_size}
  */
  readonly workloadSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#workload_type ModelServing#workload_type}
  */
  readonly workloadType?: string;
  /**
  * external_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#external_model ModelServing#external_model}
  */
  readonly externalModel?: ModelServingConfigServedEntitiesExternalModel;
}

export function modelServingConfigServedEntitiesToTerraform(struct?: ModelServingConfigServedEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_name: cdktf.stringToTerraform(struct!.entityName),
    entity_version: cdktf.stringToTerraform(struct!.entityVersion),
    environment_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVars),
    instance_profile_arn: cdktf.stringToTerraform(struct!.instanceProfileArn),
    max_provisioned_throughput: cdktf.numberToTerraform(struct!.maxProvisionedThroughput),
    min_provisioned_throughput: cdktf.numberToTerraform(struct!.minProvisionedThroughput),
    name: cdktf.stringToTerraform(struct!.name),
    scale_to_zero_enabled: cdktf.booleanToTerraform(struct!.scaleToZeroEnabled),
    workload_size: cdktf.stringToTerraform(struct!.workloadSize),
    workload_type: cdktf.stringToTerraform(struct!.workloadType),
    external_model: modelServingConfigServedEntitiesExternalModelToTerraform(struct!.externalModel),
  }
}


export function modelServingConfigServedEntitiesToHclTerraform(struct?: ModelServingConfigServedEntities | cdktf.IResolvable): any {
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
    environment_vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environmentVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    instance_profile_arn: {
      value: cdktf.stringToHclTerraform(struct!.instanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_provisioned_throughput: {
      value: cdktf.numberToHclTerraform(struct!.maxProvisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_provisioned_throughput: {
      value: cdktf.numberToHclTerraform(struct!.minProvisionedThroughput),
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
    scale_to_zero_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.scaleToZeroEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    workload_size: {
      value: cdktf.stringToHclTerraform(struct!.workloadSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_type: {
      value: cdktf.stringToHclTerraform(struct!.workloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_model: {
      value: modelServingConfigServedEntitiesExternalModelToHclTerraform(struct!.externalModel),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedEntitiesExternalModelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingConfigServedEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ModelServingConfigServedEntities | cdktf.IResolvable | undefined {
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
    if (this._environmentVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVars = this._environmentVars;
    }
    if (this._instanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileArn = this._instanceProfileArn;
    }
    if (this._maxProvisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProvisionedThroughput = this._maxProvisionedThroughput;
    }
    if (this._minProvisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProvisionedThroughput = this._minProvisionedThroughput;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scaleToZeroEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleToZeroEnabled = this._scaleToZeroEnabled;
    }
    if (this._workloadSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadSize = this._workloadSize;
    }
    if (this._workloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadType = this._workloadType;
    }
    if (this._externalModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalModel = this._externalModel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingConfigServedEntities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityName = undefined;
      this._entityVersion = undefined;
      this._environmentVars = undefined;
      this._instanceProfileArn = undefined;
      this._maxProvisionedThroughput = undefined;
      this._minProvisionedThroughput = undefined;
      this._name = undefined;
      this._scaleToZeroEnabled = undefined;
      this._workloadSize = undefined;
      this._workloadType = undefined;
      this._externalModel.internalValue = undefined;
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
      this._environmentVars = value.environmentVars;
      this._instanceProfileArn = value.instanceProfileArn;
      this._maxProvisionedThroughput = value.maxProvisionedThroughput;
      this._minProvisionedThroughput = value.minProvisionedThroughput;
      this._name = value.name;
      this._scaleToZeroEnabled = value.scaleToZeroEnabled;
      this._workloadSize = value.workloadSize;
      this._workloadType = value.workloadType;
      this._externalModel.internalValue = value.externalModel;
    }
  }

  // entity_name - computed: false, optional: true, required: false
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

  // entity_version - computed: false, optional: true, required: false
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

  // environment_vars - computed: false, optional: true, required: false
  private _environmentVars?: { [key: string]: string }; 
  public get environmentVars() {
    return this.getStringMapAttribute('environment_vars');
  }
  public set environmentVars(value: { [key: string]: string }) {
    this._environmentVars = value;
  }
  public resetEnvironmentVars() {
    this._environmentVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVarsInput() {
    return this._environmentVars;
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

  // max_provisioned_throughput - computed: false, optional: true, required: false
  private _maxProvisionedThroughput?: number; 
  public get maxProvisionedThroughput() {
    return this.getNumberAttribute('max_provisioned_throughput');
  }
  public set maxProvisionedThroughput(value: number) {
    this._maxProvisionedThroughput = value;
  }
  public resetMaxProvisionedThroughput() {
    this._maxProvisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxProvisionedThroughputInput() {
    return this._maxProvisionedThroughput;
  }

  // min_provisioned_throughput - computed: false, optional: true, required: false
  private _minProvisionedThroughput?: number; 
  public get minProvisionedThroughput() {
    return this.getNumberAttribute('min_provisioned_throughput');
  }
  public set minProvisionedThroughput(value: number) {
    this._minProvisionedThroughput = value;
  }
  public resetMinProvisionedThroughput() {
    this._minProvisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minProvisionedThroughputInput() {
    return this._minProvisionedThroughput;
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

  // scale_to_zero_enabled - computed: false, optional: true, required: false
  private _scaleToZeroEnabled?: boolean | cdktf.IResolvable; 
  public get scaleToZeroEnabled() {
    return this.getBooleanAttribute('scale_to_zero_enabled');
  }
  public set scaleToZeroEnabled(value: boolean | cdktf.IResolvable) {
    this._scaleToZeroEnabled = value;
  }
  public resetScaleToZeroEnabled() {
    this._scaleToZeroEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleToZeroEnabledInput() {
    return this._scaleToZeroEnabled;
  }

  // workload_size - computed: true, optional: true, required: false
  private _workloadSize?: string; 
  public get workloadSize() {
    return this.getStringAttribute('workload_size');
  }
  public set workloadSize(value: string) {
    this._workloadSize = value;
  }
  public resetWorkloadSize() {
    this._workloadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadSizeInput() {
    return this._workloadSize;
  }

  // workload_type - computed: true, optional: true, required: false
  private _workloadType?: string; 
  public get workloadType() {
    return this.getStringAttribute('workload_type');
  }
  public set workloadType(value: string) {
    this._workloadType = value;
  }
  public resetWorkloadType() {
    this._workloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTypeInput() {
    return this._workloadType;
  }

  // external_model - computed: false, optional: true, required: false
  private _externalModel = new ModelServingConfigServedEntitiesExternalModelOutputReference(this, "external_model");
  public get externalModel() {
    return this._externalModel;
  }
  public putExternalModel(value: ModelServingConfigServedEntitiesExternalModel) {
    this._externalModel.internalValue = value;
  }
  public resetExternalModel() {
    this._externalModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalModelInput() {
    return this._externalModel.internalValue;
  }
}

export class ModelServingConfigServedEntitiesList extends cdktf.ComplexList {
  public internalValue? : ModelServingConfigServedEntities[] | cdktf.IResolvable

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
  public get(index: number): ModelServingConfigServedEntitiesOutputReference {
    return new ModelServingConfigServedEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelServingConfigServedModels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}
  */
  readonly environmentVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}
  */
  readonly maxProvisionedThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}
  */
  readonly minProvisionedThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#model_name ModelServing#model_name}
  */
  readonly modelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#model_version ModelServing#model_version}
  */
  readonly modelVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#name ModelServing#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}
  */
  readonly scaleToZeroEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#workload_size ModelServing#workload_size}
  */
  readonly workloadSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#workload_type ModelServing#workload_type}
  */
  readonly workloadType?: string;
}

export function modelServingConfigServedModelsToTerraform(struct?: ModelServingConfigServedModels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVars),
    instance_profile_arn: cdktf.stringToTerraform(struct!.instanceProfileArn),
    max_provisioned_throughput: cdktf.numberToTerraform(struct!.maxProvisionedThroughput),
    min_provisioned_throughput: cdktf.numberToTerraform(struct!.minProvisionedThroughput),
    model_name: cdktf.stringToTerraform(struct!.modelName),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    name: cdktf.stringToTerraform(struct!.name),
    scale_to_zero_enabled: cdktf.booleanToTerraform(struct!.scaleToZeroEnabled),
    workload_size: cdktf.stringToTerraform(struct!.workloadSize),
    workload_type: cdktf.stringToTerraform(struct!.workloadType),
  }
}


export function modelServingConfigServedModelsToHclTerraform(struct?: ModelServingConfigServedModels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environmentVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    instance_profile_arn: {
      value: cdktf.stringToHclTerraform(struct!.instanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_provisioned_throughput: {
      value: cdktf.numberToHclTerraform(struct!.maxProvisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_provisioned_throughput: {
      value: cdktf.numberToHclTerraform(struct!.minProvisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    scale_to_zero_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.scaleToZeroEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    workload_size: {
      value: cdktf.stringToHclTerraform(struct!.workloadSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_type: {
      value: cdktf.stringToHclTerraform(struct!.workloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingConfigServedModelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ModelServingConfigServedModels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVars = this._environmentVars;
    }
    if (this._instanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileArn = this._instanceProfileArn;
    }
    if (this._maxProvisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProvisionedThroughput = this._maxProvisionedThroughput;
    }
    if (this._minProvisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProvisionedThroughput = this._minProvisionedThroughput;
    }
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
    if (this._scaleToZeroEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleToZeroEnabled = this._scaleToZeroEnabled;
    }
    if (this._workloadSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadSize = this._workloadSize;
    }
    if (this._workloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadType = this._workloadType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingConfigServedModels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentVars = undefined;
      this._instanceProfileArn = undefined;
      this._maxProvisionedThroughput = undefined;
      this._minProvisionedThroughput = undefined;
      this._modelName = undefined;
      this._modelVersion = undefined;
      this._name = undefined;
      this._scaleToZeroEnabled = undefined;
      this._workloadSize = undefined;
      this._workloadType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentVars = value.environmentVars;
      this._instanceProfileArn = value.instanceProfileArn;
      this._maxProvisionedThroughput = value.maxProvisionedThroughput;
      this._minProvisionedThroughput = value.minProvisionedThroughput;
      this._modelName = value.modelName;
      this._modelVersion = value.modelVersion;
      this._name = value.name;
      this._scaleToZeroEnabled = value.scaleToZeroEnabled;
      this._workloadSize = value.workloadSize;
      this._workloadType = value.workloadType;
    }
  }

  // environment_vars - computed: false, optional: true, required: false
  private _environmentVars?: { [key: string]: string }; 
  public get environmentVars() {
    return this.getStringMapAttribute('environment_vars');
  }
  public set environmentVars(value: { [key: string]: string }) {
    this._environmentVars = value;
  }
  public resetEnvironmentVars() {
    this._environmentVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVarsInput() {
    return this._environmentVars;
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

  // max_provisioned_throughput - computed: false, optional: true, required: false
  private _maxProvisionedThroughput?: number; 
  public get maxProvisionedThroughput() {
    return this.getNumberAttribute('max_provisioned_throughput');
  }
  public set maxProvisionedThroughput(value: number) {
    this._maxProvisionedThroughput = value;
  }
  public resetMaxProvisionedThroughput() {
    this._maxProvisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxProvisionedThroughputInput() {
    return this._maxProvisionedThroughput;
  }

  // min_provisioned_throughput - computed: false, optional: true, required: false
  private _minProvisionedThroughput?: number; 
  public get minProvisionedThroughput() {
    return this.getNumberAttribute('min_provisioned_throughput');
  }
  public set minProvisionedThroughput(value: number) {
    this._minProvisionedThroughput = value;
  }
  public resetMinProvisionedThroughput() {
    this._minProvisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minProvisionedThroughputInput() {
    return this._minProvisionedThroughput;
  }

  // model_name - computed: false, optional: false, required: true
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // model_version - computed: false, optional: false, required: true
  private _modelVersion?: string; 
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }
  public set modelVersion(value: string) {
    this._modelVersion = value;
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

  // scale_to_zero_enabled - computed: false, optional: true, required: false
  private _scaleToZeroEnabled?: boolean | cdktf.IResolvable; 
  public get scaleToZeroEnabled() {
    return this.getBooleanAttribute('scale_to_zero_enabled');
  }
  public set scaleToZeroEnabled(value: boolean | cdktf.IResolvable) {
    this._scaleToZeroEnabled = value;
  }
  public resetScaleToZeroEnabled() {
    this._scaleToZeroEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleToZeroEnabledInput() {
    return this._scaleToZeroEnabled;
  }

  // workload_size - computed: false, optional: true, required: false
  private _workloadSize?: string; 
  public get workloadSize() {
    return this.getStringAttribute('workload_size');
  }
  public set workloadSize(value: string) {
    this._workloadSize = value;
  }
  public resetWorkloadSize() {
    this._workloadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadSizeInput() {
    return this._workloadSize;
  }

  // workload_type - computed: true, optional: true, required: false
  private _workloadType?: string; 
  public get workloadType() {
    return this.getStringAttribute('workload_type');
  }
  public set workloadType(value: string) {
    this._workloadType = value;
  }
  public resetWorkloadType() {
    this._workloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTypeInput() {
    return this._workloadType;
  }
}

export class ModelServingConfigServedModelsList extends cdktf.ComplexList {
  public internalValue? : ModelServingConfigServedModels[] | cdktf.IResolvable

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
  public get(index: number): ModelServingConfigServedModelsOutputReference {
    return new ModelServingConfigServedModelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelServingConfigTrafficConfigRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#served_model_name ModelServing#served_model_name}
  */
  readonly servedModelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}
  */
  readonly trafficPercentage: number;
}

export function modelServingConfigTrafficConfigRoutesToTerraform(struct?: ModelServingConfigTrafficConfigRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    served_model_name: cdktf.stringToTerraform(struct!.servedModelName),
    traffic_percentage: cdktf.numberToTerraform(struct!.trafficPercentage),
  }
}


export function modelServingConfigTrafficConfigRoutesToHclTerraform(struct?: ModelServingConfigTrafficConfigRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    served_model_name: {
      value: cdktf.stringToHclTerraform(struct!.servedModelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_percentage: {
      value: cdktf.numberToHclTerraform(struct!.trafficPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingConfigTrafficConfigRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ModelServingConfigTrafficConfigRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servedModelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servedModelName = this._servedModelName;
    }
    if (this._trafficPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficPercentage = this._trafficPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingConfigTrafficConfigRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._servedModelName = undefined;
      this._trafficPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._servedModelName = value.servedModelName;
      this._trafficPercentage = value.trafficPercentage;
    }
  }

  // served_model_name - computed: false, optional: false, required: true
  private _servedModelName?: string; 
  public get servedModelName() {
    return this.getStringAttribute('served_model_name');
  }
  public set servedModelName(value: string) {
    this._servedModelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servedModelNameInput() {
    return this._servedModelName;
  }

  // traffic_percentage - computed: false, optional: false, required: true
  private _trafficPercentage?: number; 
  public get trafficPercentage() {
    return this.getNumberAttribute('traffic_percentage');
  }
  public set trafficPercentage(value: number) {
    this._trafficPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPercentageInput() {
    return this._trafficPercentage;
  }
}

export class ModelServingConfigTrafficConfigRoutesList extends cdktf.ComplexList {
  public internalValue? : ModelServingConfigTrafficConfigRoutes[] | cdktf.IResolvable

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
  public get(index: number): ModelServingConfigTrafficConfigRoutesOutputReference {
    return new ModelServingConfigTrafficConfigRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelServingConfigTrafficConfig {
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#routes ModelServing#routes}
  */
  readonly routes?: ModelServingConfigTrafficConfigRoutes[] | cdktf.IResolvable;
}

export function modelServingConfigTrafficConfigToTerraform(struct?: ModelServingConfigTrafficConfigOutputReference | ModelServingConfigTrafficConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routes: cdktf.listMapper(modelServingConfigTrafficConfigRoutesToTerraform, true)(struct!.routes),
  }
}


export function modelServingConfigTrafficConfigToHclTerraform(struct?: ModelServingConfigTrafficConfigOutputReference | ModelServingConfigTrafficConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routes: {
      value: cdktf.listMapperHcl(modelServingConfigTrafficConfigRoutesToHclTerraform, true)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigTrafficConfigRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingConfigTrafficConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigTrafficConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingConfigTrafficConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routes.internalValue = value.routes;
    }
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new ModelServingConfigTrafficConfigRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: ModelServingConfigTrafficConfigRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}
export interface ModelServingConfigA {
  /**
  * auto_capture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#auto_capture_config ModelServing#auto_capture_config}
  */
  readonly autoCaptureConfig?: ModelServingConfigAutoCaptureConfig;
  /**
  * served_entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#served_entities ModelServing#served_entities}
  */
  readonly servedEntities?: ModelServingConfigServedEntities[] | cdktf.IResolvable;
  /**
  * served_models block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#served_models ModelServing#served_models}
  */
  readonly servedModels?: ModelServingConfigServedModels[] | cdktf.IResolvable;
  /**
  * traffic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#traffic_config ModelServing#traffic_config}
  */
  readonly trafficConfig?: ModelServingConfigTrafficConfig;
}

export function modelServingConfigAToTerraform(struct?: ModelServingConfigAOutputReference | ModelServingConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_capture_config: modelServingConfigAutoCaptureConfigToTerraform(struct!.autoCaptureConfig),
    served_entities: cdktf.listMapper(modelServingConfigServedEntitiesToTerraform, true)(struct!.servedEntities),
    served_models: cdktf.listMapper(modelServingConfigServedModelsToTerraform, true)(struct!.servedModels),
    traffic_config: modelServingConfigTrafficConfigToTerraform(struct!.trafficConfig),
  }
}


export function modelServingConfigAToHclTerraform(struct?: ModelServingConfigAOutputReference | ModelServingConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_capture_config: {
      value: modelServingConfigAutoCaptureConfigToHclTerraform(struct!.autoCaptureConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigAutoCaptureConfigList",
    },
    served_entities: {
      value: cdktf.listMapperHcl(modelServingConfigServedEntitiesToHclTerraform, true)(struct!.servedEntities),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedEntitiesList",
    },
    served_models: {
      value: cdktf.listMapperHcl(modelServingConfigServedModelsToHclTerraform, true)(struct!.servedModels),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigServedModelsList",
    },
    traffic_config: {
      value: modelServingConfigTrafficConfigToHclTerraform(struct!.trafficConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelServingConfigTrafficConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelServingConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCaptureConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCaptureConfig = this._autoCaptureConfig?.internalValue;
    }
    if (this._servedEntities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servedEntities = this._servedEntities?.internalValue;
    }
    if (this._servedModels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servedModels = this._servedModels?.internalValue;
    }
    if (this._trafficConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficConfig = this._trafficConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoCaptureConfig.internalValue = undefined;
      this._servedEntities.internalValue = undefined;
      this._servedModels.internalValue = undefined;
      this._trafficConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoCaptureConfig.internalValue = value.autoCaptureConfig;
      this._servedEntities.internalValue = value.servedEntities;
      this._servedModels.internalValue = value.servedModels;
      this._trafficConfig.internalValue = value.trafficConfig;
    }
  }

  // auto_capture_config - computed: false, optional: true, required: false
  private _autoCaptureConfig = new ModelServingConfigAutoCaptureConfigOutputReference(this, "auto_capture_config");
  public get autoCaptureConfig() {
    return this._autoCaptureConfig;
  }
  public putAutoCaptureConfig(value: ModelServingConfigAutoCaptureConfig) {
    this._autoCaptureConfig.internalValue = value;
  }
  public resetAutoCaptureConfig() {
    this._autoCaptureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCaptureConfigInput() {
    return this._autoCaptureConfig.internalValue;
  }

  // served_entities - computed: false, optional: true, required: false
  private _servedEntities = new ModelServingConfigServedEntitiesList(this, "served_entities", false);
  public get servedEntities() {
    return this._servedEntities;
  }
  public putServedEntities(value: ModelServingConfigServedEntities[] | cdktf.IResolvable) {
    this._servedEntities.internalValue = value;
  }
  public resetServedEntities() {
    this._servedEntities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servedEntitiesInput() {
    return this._servedEntities.internalValue;
  }

  // served_models - computed: false, optional: true, required: false
  private _servedModels = new ModelServingConfigServedModelsList(this, "served_models", false);
  public get servedModels() {
    return this._servedModels;
  }
  public putServedModels(value: ModelServingConfigServedModels[] | cdktf.IResolvable) {
    this._servedModels.internalValue = value;
  }
  public resetServedModels() {
    this._servedModels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servedModelsInput() {
    return this._servedModels.internalValue;
  }

  // traffic_config - computed: false, optional: true, required: false
  private _trafficConfig = new ModelServingConfigTrafficConfigOutputReference(this, "traffic_config");
  public get trafficConfig() {
    return this._trafficConfig;
  }
  public putTrafficConfig(value: ModelServingConfigTrafficConfig) {
    this._trafficConfig.internalValue = value;
  }
  public resetTrafficConfig() {
    this._trafficConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficConfigInput() {
    return this._trafficConfig.internalValue;
  }
}
export interface ModelServingRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#calls ModelServing#calls}
  */
  readonly calls: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#key ModelServing#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}
  */
  readonly renewalPeriod: string;
}

export function modelServingRateLimitsToTerraform(struct?: ModelServingRateLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calls: cdktf.numberToTerraform(struct!.calls),
    key: cdktf.stringToTerraform(struct!.key),
    renewal_period: cdktf.stringToTerraform(struct!.renewalPeriod),
  }
}


export function modelServingRateLimitsToHclTerraform(struct?: ModelServingRateLimits | cdktf.IResolvable): any {
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
    renewal_period: {
      value: cdktf.stringToHclTerraform(struct!.renewalPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingRateLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ModelServingRateLimits | cdktf.IResolvable | undefined {
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
    if (this._renewalPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewalPeriod = this._renewalPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingRateLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calls = undefined;
      this._key = undefined;
      this._renewalPeriod = undefined;
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
      this._renewalPeriod = value.renewalPeriod;
    }
  }

  // calls - computed: false, optional: false, required: true
  private _calls?: number; 
  public get calls() {
    return this.getNumberAttribute('calls');
  }
  public set calls(value: number) {
    this._calls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callsInput() {
    return this._calls;
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

  // renewal_period - computed: false, optional: false, required: true
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
}

export class ModelServingRateLimitsList extends cdktf.ComplexList {
  public internalValue? : ModelServingRateLimits[] | cdktf.IResolvable

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
  public get(index: number): ModelServingRateLimitsOutputReference {
    return new ModelServingRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelServingTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#key ModelServing#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#value ModelServing#value}
  */
  readonly value?: string;
}

export function modelServingTagsToTerraform(struct?: ModelServingTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function modelServingTagsToHclTerraform(struct?: ModelServingTags | cdktf.IResolvable): any {
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

export class ModelServingTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ModelServingTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ModelServingTags | cdktf.IResolvable | undefined) {
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

export class ModelServingTagsList extends cdktf.ComplexList {
  public internalValue? : ModelServingTags[] | cdktf.IResolvable

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
  public get(index: number): ModelServingTagsOutputReference {
    return new ModelServingTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelServingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#create ModelServing#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#update ModelServing#update}
  */
  readonly update?: string;
}

export function modelServingTimeoutsToTerraform(struct?: ModelServingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function modelServingTimeoutsToHclTerraform(struct?: ModelServingTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelServingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ModelServingTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving databricks_model_serving}
*/
export class ModelServing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_model_serving";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ModelServing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ModelServing to import
  * @param importFromId The id of the existing ModelServing that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ModelServing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_model_serving", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/model_serving databricks_model_serving} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ModelServingConfig
  */
  public constructor(scope: Construct, id: string, config: ModelServingConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_model_serving',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.74.0',
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
    this._budgetPolicyId = config.budgetPolicyId;
    this._id = config.id;
    this._name = config.name;
    this._routeOptimized = config.routeOptimized;
    this._aiGateway.internalValue = config.aiGateway;
    this._config.internalValue = config.config;
    this._rateLimits.internalValue = config.rateLimits;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // budget_policy_id - computed: false, optional: true, required: false
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

  // route_optimized - computed: false, optional: true, required: false
  private _routeOptimized?: boolean | cdktf.IResolvable; 
  public get routeOptimized() {
    return this.getBooleanAttribute('route_optimized');
  }
  public set routeOptimized(value: boolean | cdktf.IResolvable) {
    this._routeOptimized = value;
  }
  public resetRouteOptimized() {
    this._routeOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOptimizedInput() {
    return this._routeOptimized;
  }

  // serving_endpoint_id - computed: true, optional: false, required: false
  public get servingEndpointId() {
    return this.getStringAttribute('serving_endpoint_id');
  }

  // ai_gateway - computed: false, optional: true, required: false
  private _aiGateway = new ModelServingAiGatewayOutputReference(this, "ai_gateway");
  public get aiGateway() {
    return this._aiGateway;
  }
  public putAiGateway(value: ModelServingAiGateway) {
    this._aiGateway.internalValue = value;
  }
  public resetAiGateway() {
    this._aiGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiGatewayInput() {
    return this._aiGateway.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new ModelServingConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ModelServingConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // rate_limits - computed: false, optional: true, required: false
  private _rateLimits = new ModelServingRateLimitsList(this, "rate_limits", false);
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: ModelServingRateLimits[] | cdktf.IResolvable) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ModelServingTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ModelServingTags[] | cdktf.IResolvable) {
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
  private _timeouts = new ModelServingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ModelServingTimeouts) {
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
      budget_policy_id: cdktf.stringToTerraform(this._budgetPolicyId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      route_optimized: cdktf.booleanToTerraform(this._routeOptimized),
      ai_gateway: modelServingAiGatewayToTerraform(this._aiGateway.internalValue),
      config: modelServingConfigAToTerraform(this._config.internalValue),
      rate_limits: cdktf.listMapper(modelServingRateLimitsToTerraform, true)(this._rateLimits.internalValue),
      tags: cdktf.listMapper(modelServingTagsToTerraform, true)(this._tags.internalValue),
      timeouts: modelServingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      budget_policy_id: {
        value: cdktf.stringToHclTerraform(this._budgetPolicyId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_optimized: {
        value: cdktf.booleanToHclTerraform(this._routeOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ai_gateway: {
        value: modelServingAiGatewayToHclTerraform(this._aiGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModelServingAiGatewayList",
      },
      config: {
        value: modelServingConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModelServingConfigAList",
      },
      rate_limits: {
        value: cdktf.listMapperHcl(modelServingRateLimitsToHclTerraform, true)(this._rateLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModelServingRateLimitsList",
      },
      tags: {
        value: cdktf.listMapperHcl(modelServingTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModelServingTagsList",
      },
      timeouts: {
        value: modelServingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ModelServingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
