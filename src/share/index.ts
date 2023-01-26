// https://www.terraform.io/docs/providers/databricks/r/share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/share#created_at Share#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/share#created_by Share#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/share#id Share#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/share#name Share#name}
  */
  readonly name: string;
  /**
  * object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/share#object Share#object}
  */
  readonly object?: ShareObject[] | cdktf.IResolvable;
}
export interface ShareObject {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/share#added_at Share#added_at}
  */
  readonly addedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/share#added_by Share#added_by}
  */
  readonly addedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/share#comment Share#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/share#data_object_type Share#data_object_type}
  */
  readonly dataObjectType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/share#name Share#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/share#shared_as Share#shared_as}
  */
  readonly sharedAs?: string;
}

export function shareObjectToTerraform(struct?: ShareObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    added_at: cdktf.numberToTerraform(struct!.addedAt),
    added_by: cdktf.stringToTerraform(struct!.addedBy),
    comment: cdktf.stringToTerraform(struct!.comment),
    data_object_type: cdktf.stringToTerraform(struct!.dataObjectType),
    name: cdktf.stringToTerraform(struct!.name),
    shared_as: cdktf.stringToTerraform(struct!.sharedAs),
  }
}

export class ShareObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ShareObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.addedAt = this._addedAt;
    }
    if (this._addedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.addedBy = this._addedBy;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._dataObjectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataObjectType = this._dataObjectType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sharedAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedAs = this._sharedAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShareObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addedAt = undefined;
      this._addedBy = undefined;
      this._comment = undefined;
      this._dataObjectType = undefined;
      this._name = undefined;
      this._sharedAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addedAt = value.addedAt;
      this._addedBy = value.addedBy;
      this._comment = value.comment;
      this._dataObjectType = value.dataObjectType;
      this._name = value.name;
      this._sharedAs = value.sharedAs;
    }
  }

  // added_at - computed: true, optional: true, required: false
  private _addedAt?: number; 
  public get addedAt() {
    return this.getNumberAttribute('added_at');
  }
  public set addedAt(value: number) {
    this._addedAt = value;
  }
  public resetAddedAt() {
    this._addedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addedAtInput() {
    return this._addedAt;
  }

  // added_by - computed: true, optional: true, required: false
  private _addedBy?: string; 
  public get addedBy() {
    return this.getStringAttribute('added_by');
  }
  public set addedBy(value: string) {
    this._addedBy = value;
  }
  public resetAddedBy() {
    this._addedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addedByInput() {
    return this._addedBy;
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

  // data_object_type - computed: false, optional: false, required: true
  private _dataObjectType?: string; 
  public get dataObjectType() {
    return this.getStringAttribute('data_object_type');
  }
  public set dataObjectType(value: string) {
    this._dataObjectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataObjectTypeInput() {
    return this._dataObjectType;
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

  // shared_as - computed: true, optional: true, required: false
  private _sharedAs?: string; 
  public get sharedAs() {
    return this.getStringAttribute('shared_as');
  }
  public set sharedAs(value: string) {
    this._sharedAs = value;
  }
  public resetSharedAs() {
    this._sharedAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAsInput() {
    return this._sharedAs;
  }
}

export class ShareObjectList extends cdktf.ComplexList {
  public internalValue? : ShareObject[] | cdktf.IResolvable

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
  public get(index: number): ShareObjectOutputReference {
    return new ShareObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/share databricks_share}
*/
export class Share extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_share";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/share databricks_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShareConfig
  */
  public constructor(scope: Construct, id: string, config: ShareConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_share',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.9.1',
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
    this._createdAt = config.createdAt;
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._name = config.name;
    this._object.internalValue = config.object;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: true, required: false
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

  // created_by - computed: true, optional: true, required: false
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

  // object - computed: false, optional: true, required: false
  private _object = new ShareObjectList(this, "object", true);
  public get object() {
    return this._object;
  }
  public putObject(value: ShareObject[] | cdktf.IResolvable) {
    this._object.internalValue = value;
  }
  public resetObject() {
    this._object.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.numberToTerraform(this._createdAt),
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      object: cdktf.listMapper(shareObjectToTerraform, true)(this._object.internalValue),
    };
  }
}
