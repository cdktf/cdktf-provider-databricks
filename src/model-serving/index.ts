/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ModelServingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#id ModelServing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#name ModelServing#name}
  */
  readonly name: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#config ModelServing#config}
  */
  readonly config: ModelServingConfigA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#timeouts ModelServing#timeouts}
  */
  readonly timeouts?: ModelServingTimeouts;
}
export interface ModelServingConfigServedModels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}
  */
  readonly environmentVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#model_name ModelServing#model_name}
  */
  readonly modelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#model_version ModelServing#model_version}
  */
  readonly modelVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#name ModelServing#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}
  */
  readonly scaleToZeroEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#workload_size ModelServing#workload_size}
  */
  readonly workloadSize: string;
}

export function modelServingConfigServedModelsToTerraform(struct?: ModelServingConfigServedModels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVars),
    instance_profile_arn: cdktf.stringToTerraform(struct!.instanceProfileArn),
    model_name: cdktf.stringToTerraform(struct!.modelName),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    name: cdktf.stringToTerraform(struct!.name),
    scale_to_zero_enabled: cdktf.booleanToTerraform(struct!.scaleToZeroEnabled),
    workload_size: cdktf.stringToTerraform(struct!.workloadSize),
  }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelServingConfigServedModels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentVars = undefined;
      this._instanceProfileArn = undefined;
      this._modelName = undefined;
      this._modelVersion = undefined;
      this._name = undefined;
      this._scaleToZeroEnabled = undefined;
      this._workloadSize = undefined;
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
      this._modelName = value.modelName;
      this._modelVersion = value.modelVersion;
      this._name = value.name;
      this._scaleToZeroEnabled = value.scaleToZeroEnabled;
      this._workloadSize = value.workloadSize;
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

  // workload_size - computed: false, optional: false, required: true
  private _workloadSize?: string; 
  public get workloadSize() {
    return this.getStringAttribute('workload_size');
  }
  public set workloadSize(value: string) {
    this._workloadSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadSizeInput() {
    return this._workloadSize;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#served_model_name ModelServing#served_model_name}
  */
  readonly servedModelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#routes ModelServing#routes}
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
  * served_models block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#served_models ModelServing#served_models}
  */
  readonly servedModels: ModelServingConfigServedModels[] | cdktf.IResolvable;
  /**
  * traffic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#traffic_config ModelServing#traffic_config}
  */
  readonly trafficConfig?: ModelServingConfigTrafficConfig;
}

export function modelServingConfigAToTerraform(struct?: ModelServingConfigAOutputReference | ModelServingConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    served_models: cdktf.listMapper(modelServingConfigServedModelsToTerraform, true)(struct!.servedModels),
    traffic_config: modelServingConfigTrafficConfigToTerraform(struct!.trafficConfig),
  }
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
      this._servedModels.internalValue = undefined;
      this._trafficConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._servedModels.internalValue = value.servedModels;
      this._trafficConfig.internalValue = value.trafficConfig;
    }
  }

  // served_models - computed: false, optional: false, required: true
  private _servedModels = new ModelServingConfigServedModelsList(this, "served_models", false);
  public get servedModels() {
    return this._servedModels;
  }
  public putServedModels(value: ModelServingConfigServedModels[] | cdktf.IResolvable) {
    this._servedModels.internalValue = value;
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
export interface ModelServingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#create ModelServing#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving#update ModelServing#update}
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving databricks_model_serving}
*/
export class ModelServing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_model_serving";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/model_serving databricks_model_serving} Resource
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
        providerVersion: '1.23.0',
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
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
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

  // serving_endpoint_id - computed: true, optional: false, required: false
  public get servingEndpointId() {
    return this.getStringAttribute('serving_endpoint_id');
  }

  // config - computed: false, optional: false, required: true
  private _config = new ModelServingConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ModelServingConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      config: modelServingConfigAToTerraform(this._config.internalValue),
      timeouts: modelServingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
