// https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/mlflow_experiment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MlflowExperimentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}
  */
  readonly artifactLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}
  */
  readonly creationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/mlflow_experiment#description MlflowExperiment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}
  */
  readonly experimentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/mlflow_experiment#id MlflowExperiment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}
  */
  readonly lastUpdateTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}
  */
  readonly lifecycleStage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/mlflow_experiment#name MlflowExperiment#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/mlflow_experiment#timeouts MlflowExperiment#timeouts}
  */
  readonly timeouts?: MlflowExperimentTimeouts;
}
export interface MlflowExperimentTimeouts {
}

export function mlflowExperimentTimeoutsToTerraform(struct?: MlflowExperimentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mlflowExperimentTimeoutsToHclTerraform(struct?: MlflowExperimentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MlflowExperimentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MlflowExperimentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlflowExperimentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/mlflow_experiment databricks_mlflow_experiment}
*/
export class MlflowExperiment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mlflow_experiment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MlflowExperiment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MlflowExperiment to import
  * @param importFromId The id of the existing MlflowExperiment that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/mlflow_experiment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MlflowExperiment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_mlflow_experiment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/resources/mlflow_experiment databricks_mlflow_experiment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MlflowExperimentConfig
  */
  public constructor(scope: Construct, id: string, config: MlflowExperimentConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mlflow_experiment',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.61.0',
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
    this._artifactLocation = config.artifactLocation;
    this._creationTime = config.creationTime;
    this._description = config.description;
    this._experimentId = config.experimentId;
    this._id = config.id;
    this._lastUpdateTime = config.lastUpdateTime;
    this._lifecycleStage = config.lifecycleStage;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_location - computed: false, optional: true, required: false
  private _artifactLocation?: string; 
  public get artifactLocation() {
    return this.getStringAttribute('artifact_location');
  }
  public set artifactLocation(value: string) {
    this._artifactLocation = value;
  }
  public resetArtifactLocation() {
    this._artifactLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactLocationInput() {
    return this._artifactLocation;
  }

  // creation_time - computed: true, optional: true, required: false
  private _creationTime?: number; 
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }
  public set creationTime(value: number) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime;
  }

  // description - computed: false, optional: true, required: false
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

  // experiment_id - computed: true, optional: true, required: false
  private _experimentId?: string; 
  public get experimentId() {
    return this.getStringAttribute('experiment_id');
  }
  public set experimentId(value: string) {
    this._experimentId = value;
  }
  public resetExperimentId() {
    this._experimentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentIdInput() {
    return this._experimentId;
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

  // last_update_time - computed: true, optional: true, required: false
  private _lastUpdateTime?: number; 
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }
  public set lastUpdateTime(value: number) {
    this._lastUpdateTime = value;
  }
  public resetLastUpdateTime() {
    this._lastUpdateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateTimeInput() {
    return this._lastUpdateTime;
  }

  // lifecycle_stage - computed: true, optional: true, required: false
  private _lifecycleStage?: string; 
  public get lifecycleStage() {
    return this.getStringAttribute('lifecycle_stage');
  }
  public set lifecycleStage(value: string) {
    this._lifecycleStage = value;
  }
  public resetLifecycleStage() {
    this._lifecycleStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStageInput() {
    return this._lifecycleStage;
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

  // timeouts - computed: false, optional: true, required: true
  private _timeouts = new MlflowExperimentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MlflowExperimentTimeouts) {
    this._timeouts.internalValue = value;
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
      artifact_location: cdktf.stringToTerraform(this._artifactLocation),
      creation_time: cdktf.numberToTerraform(this._creationTime),
      description: cdktf.stringToTerraform(this._description),
      experiment_id: cdktf.stringToTerraform(this._experimentId),
      id: cdktf.stringToTerraform(this._id),
      last_update_time: cdktf.numberToTerraform(this._lastUpdateTime),
      lifecycle_stage: cdktf.stringToTerraform(this._lifecycleStage),
      name: cdktf.stringToTerraform(this._name),
      timeouts: mlflowExperimentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_location: {
        value: cdktf.stringToHclTerraform(this._artifactLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creation_time: {
        value: cdktf.numberToHclTerraform(this._creationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      experiment_id: {
        value: cdktf.stringToHclTerraform(this._experimentId),
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
      last_update_time: {
        value: cdktf.numberToHclTerraform(this._lastUpdateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lifecycle_stage: {
        value: cdktf.stringToHclTerraform(this._lifecycleStage),
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
      timeouts: {
        value: mlflowExperimentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MlflowExperimentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
