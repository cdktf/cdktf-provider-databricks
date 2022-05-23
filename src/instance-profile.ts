// https://www.terraform.io/docs/providers/databricks/r/instance_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_profile#instance_profile_arn InstanceProfile#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_profile#is_meta_instance_profile InstanceProfile#is_meta_instance_profile}
  */
  readonly isMetaInstanceProfile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/instance_profile#skip_validation InstanceProfile#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/instance_profile databricks_instance_profile}
*/
export class InstanceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_instance_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/instance_profile databricks_instance_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InstanceProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_instance_profile',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '0.5.8',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceProfileArn = config.instanceProfileArn;
    this._isMetaInstanceProfile = config.isMetaInstanceProfile;
    this._skipValidation = config.skipValidation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      instance_profile_arn: cdktf.stringToTerraform(this._instanceProfileArn),
      is_meta_instance_profile: cdktf.booleanToTerraform(this._isMetaInstanceProfile),
      skip_validation: cdktf.booleanToTerraform(this._skipValidation),
    };
  }
}
