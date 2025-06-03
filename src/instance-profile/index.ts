// https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/instance_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/instance_profile#iam_role_arn InstanceProfile#iam_role_arn}
  */
  readonly iamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/instance_profile#id InstanceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/instance_profile#instance_profile_arn InstanceProfile#instance_profile_arn}
  */
  readonly instanceProfileArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/instance_profile#is_meta_instance_profile InstanceProfile#is_meta_instance_profile}
  */
  readonly isMetaInstanceProfile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/instance_profile#skip_validation InstanceProfile#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/instance_profile databricks_instance_profile}
*/
export class InstanceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_instance_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanceProfile to import
  * @param importFromId The id of the existing InstanceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/instance_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_instance_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/instance_profile databricks_instance_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_instance_profile',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.81.1',
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
    this._iamRoleArn = config.iamRoleArn;
    this._id = config.id;
    this._instanceProfileArn = config.instanceProfileArn;
    this._isMetaInstanceProfile = config.isMetaInstanceProfile;
    this._skipValidation = config.skipValidation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // iam_role_arn - computed: false, optional: true, required: false
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  public resetIamRoleArn() {
    this._iamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
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

  // instance_profile_arn - computed: false, optional: false, required: true
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // is_meta_instance_profile - computed: false, optional: true, required: false
  private _isMetaInstanceProfile?: boolean | cdktf.IResolvable; 
  public get isMetaInstanceProfile() {
    return this.getBooleanAttribute('is_meta_instance_profile');
  }
  public set isMetaInstanceProfile(value: boolean | cdktf.IResolvable) {
    this._isMetaInstanceProfile = value;
  }
  public resetIsMetaInstanceProfile() {
    this._isMetaInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMetaInstanceProfileInput() {
    return this._isMetaInstanceProfile;
  }

  // skip_validation - computed: true, optional: true, required: false
  private _skipValidation?: boolean | cdktf.IResolvable; 
  public get skipValidation() {
    return this.getBooleanAttribute('skip_validation');
  }
  public set skipValidation(value: boolean | cdktf.IResolvable) {
    this._skipValidation = value;
  }
  public resetSkipValidation() {
    this._skipValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipValidationInput() {
    return this._skipValidation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      id: cdktf.stringToTerraform(this._id),
      instance_profile_arn: cdktf.stringToTerraform(this._instanceProfileArn),
      is_meta_instance_profile: cdktf.booleanToTerraform(this._isMetaInstanceProfile),
      skip_validation: cdktf.booleanToTerraform(this._skipValidation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      iam_role_arn: {
        value: cdktf.stringToHclTerraform(this._iamRoleArn),
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
      instance_profile_arn: {
        value: cdktf.stringToHclTerraform(this._instanceProfileArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_meta_instance_profile: {
        value: cdktf.booleanToHclTerraform(this._isMetaInstanceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_validation: {
        value: cdktf.booleanToHclTerraform(this._skipValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
