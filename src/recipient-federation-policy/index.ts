/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/recipient_federation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecipientFederationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/recipient_federation_policy#comment RecipientFederationPolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/recipient_federation_policy#name RecipientFederationPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/recipient_federation_policy#oidc_policy RecipientFederationPolicy#oidc_policy}
  */
  readonly oidcPolicy?: RecipientFederationPolicyOidcPolicy;
}
export interface RecipientFederationPolicyOidcPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/recipient_federation_policy#audiences RecipientFederationPolicy#audiences}
  */
  readonly audiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/recipient_federation_policy#issuer RecipientFederationPolicy#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/recipient_federation_policy#subject RecipientFederationPolicy#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/recipient_federation_policy#subject_claim RecipientFederationPolicy#subject_claim}
  */
  readonly subjectClaim: string;
}

export function recipientFederationPolicyOidcPolicyToTerraform(struct?: RecipientFederationPolicyOidcPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    subject: cdktf.stringToTerraform(struct!.subject),
    subject_claim: cdktf.stringToTerraform(struct!.subjectClaim),
  }
}


export function recipientFederationPolicyOidcPolicyToHclTerraform(struct?: RecipientFederationPolicyOidcPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_claim: {
      value: cdktf.stringToHclTerraform(struct!.subjectClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecipientFederationPolicyOidcPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RecipientFederationPolicyOidcPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjectClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectClaim = this._subjectClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecipientFederationPolicyOidcPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
      this._issuer = undefined;
      this._subject = undefined;
      this._subjectClaim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audiences = value.audiences;
      this._issuer = value.issuer;
      this._subject = value.subject;
      this._subjectClaim = value.subjectClaim;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subject_claim - computed: false, optional: false, required: true
  private _subjectClaim?: string; 
  public get subjectClaim() {
    return this.getStringAttribute('subject_claim');
  }
  public set subjectClaim(value: string) {
    this._subjectClaim = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectClaimInput() {
    return this._subjectClaim;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/recipient_federation_policy databricks_recipient_federation_policy}
*/
export class RecipientFederationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_recipient_federation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RecipientFederationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RecipientFederationPolicy to import
  * @param importFromId The id of the existing RecipientFederationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/recipient_federation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RecipientFederationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_recipient_federation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/recipient_federation_policy databricks_recipient_federation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecipientFederationPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RecipientFederationPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_recipient_federation_policy',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.86.0',
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
    this._comment = config.comment;
    this._name = config.name;
    this._oidcPolicy.internalValue = config.oidcPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // oidc_policy - computed: false, optional: true, required: false
  private _oidcPolicy = new RecipientFederationPolicyOidcPolicyOutputReference(this, "oidc_policy");
  public get oidcPolicy() {
    return this._oidcPolicy;
  }
  public putOidcPolicy(value: RecipientFederationPolicyOidcPolicy) {
    this._oidcPolicy.internalValue = value;
  }
  public resetOidcPolicy() {
    this._oidcPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcPolicyInput() {
    return this._oidcPolicy.internalValue;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      name: cdktf.stringToTerraform(this._name),
      oidc_policy: recipientFederationPolicyOidcPolicyToTerraform(this._oidcPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      oidc_policy: {
        value: recipientFederationPolicyOidcPolicyToHclTerraform(this._oidcPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RecipientFederationPolicyOidcPolicy",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
