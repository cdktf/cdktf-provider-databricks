// https://www.terraform.io/docs/providers/databricks/r/mlflow_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MlflowModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mlflow_model#creation_timestamp MlflowModel#creation_timestamp}
  */
  readonly creationTimestamp?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mlflow_model#description MlflowModel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mlflow_model#id MlflowModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mlflow_model#last_updated_timestamp MlflowModel#last_updated_timestamp}
  */
  readonly lastUpdatedTimestamp?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mlflow_model#name MlflowModel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mlflow_model#registered_model_id MlflowModel#registered_model_id}
  */
  readonly registeredModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mlflow_model#user_id MlflowModel#user_id}
  */
  readonly userId?: string;
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mlflow_model#tags MlflowModel#tags}
  */
  readonly tags?: MlflowModelTags[] | cdktf.IResolvable;
}
export interface MlflowModelTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mlflow_model#key MlflowModel#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mlflow_model#value MlflowModel#value}
  */
  readonly value: string;
}

export function mlflowModelTagsToTerraform(struct?: MlflowModelTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class MlflowModelTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MlflowModelTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MlflowModelTags | cdktf.IResolvable | undefined) {
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

export class MlflowModelTagsList extends cdktf.ComplexList {
  public internalValue? : MlflowModelTags[] | cdktf.IResolvable

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
  public get(index: number): MlflowModelTagsOutputReference {
    return new MlflowModelTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/mlflow_model databricks_mlflow_model}
*/
export class MlflowModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mlflow_model";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/mlflow_model databricks_mlflow_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MlflowModelConfig
  */
  public constructor(scope: Construct, id: string, config: MlflowModelConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mlflow_model',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.14.3',
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
    this._creationTimestamp = config.creationTimestamp;
    this._description = config.description;
    this._id = config.id;
    this._lastUpdatedTimestamp = config.lastUpdatedTimestamp;
    this._name = config.name;
    this._registeredModelId = config.registeredModelId;
    this._userId = config.userId;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // registered_model_id - computed: true, optional: true, required: false
  private _registeredModelId?: string; 
  public get registeredModelId() {
    return this.getStringAttribute('registered_model_id');
  }
  public set registeredModelId(value: string) {
    this._registeredModelId = value;
  }
  public resetRegisteredModelId() {
    this._registeredModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredModelIdInput() {
    return this._registeredModelId;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new MlflowModelTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MlflowModelTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      creation_timestamp: cdktf.numberToTerraform(this._creationTimestamp),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      last_updated_timestamp: cdktf.numberToTerraform(this._lastUpdatedTimestamp),
      name: cdktf.stringToTerraform(this._name),
      registered_model_id: cdktf.stringToTerraform(this._registeredModelId),
      user_id: cdktf.stringToTerraform(this._userId),
      tags: cdktf.listMapper(mlflowModelTagsToTerraform, true)(this._tags.internalValue),
    };
  }
}
