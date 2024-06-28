/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/repo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/repo#branch Repo#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/repo#commit_hash Repo#commit_hash}
  */
  readonly commitHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/repo#git_provider Repo#git_provider}
  */
  readonly gitProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/repo#id Repo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/repo#path Repo#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/repo#tag Repo#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/repo#url Repo#url}
  */
  readonly url: string;
  /**
  * sparse_checkout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/repo#sparse_checkout Repo#sparse_checkout}
  */
  readonly sparseCheckout?: RepoSparseCheckout;
}
export interface RepoSparseCheckout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/repo#patterns Repo#patterns}
  */
  readonly patterns: string[];
}

export function repoSparseCheckoutToTerraform(struct?: RepoSparseCheckoutOutputReference | RepoSparseCheckout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.patterns),
  }
}


export function repoSparseCheckoutToHclTerraform(struct?: RepoSparseCheckoutOutputReference | RepoSparseCheckout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.patterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepoSparseCheckoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepoSparseCheckout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepoSparseCheckout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._patterns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._patterns = value.patterns;
    }
  }

  // patterns - computed: false, optional: false, required: true
  private _patterns?: string[]; 
  public get patterns() {
    return this.getListAttribute('patterns');
  }
  public set patterns(value: string[]) {
    this._patterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/repo databricks_repo}
*/
export class Repo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_repo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Repo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Repo to import
  * @param importFromId The id of the existing Repo that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/repo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Repo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_repo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/repo databricks_repo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepoConfig
  */
  public constructor(scope: Construct, id: string, config: RepoConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_repo',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.48.1',
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
    this._branch = config.branch;
    this._commitHash = config.commitHash;
    this._gitProvider = config.gitProvider;
    this._id = config.id;
    this._path = config.path;
    this._tag = config.tag;
    this._url = config.url;
    this._sparseCheckout.internalValue = config.sparseCheckout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: true, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // commit_hash - computed: true, optional: true, required: false
  private _commitHash?: string; 
  public get commitHash() {
    return this.getStringAttribute('commit_hash');
  }
  public set commitHash(value: string) {
    this._commitHash = value;
  }
  public resetCommitHash() {
    this._commitHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitHashInput() {
    return this._commitHash;
  }

  // git_provider - computed: true, optional: true, required: false
  private _gitProvider?: string; 
  public get gitProvider() {
    return this.getStringAttribute('git_provider');
  }
  public set gitProvider(value: string) {
    this._gitProvider = value;
  }
  public resetGitProvider() {
    this._gitProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitProviderInput() {
    return this._gitProvider;
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // workspace_path - computed: true, optional: false, required: false
  public get workspacePath() {
    return this.getStringAttribute('workspace_path');
  }

  // sparse_checkout - computed: false, optional: true, required: false
  private _sparseCheckout = new RepoSparseCheckoutOutputReference(this, "sparse_checkout");
  public get sparseCheckout() {
    return this._sparseCheckout;
  }
  public putSparseCheckout(value: RepoSparseCheckout) {
    this._sparseCheckout.internalValue = value;
  }
  public resetSparseCheckout() {
    this._sparseCheckout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparseCheckoutInput() {
    return this._sparseCheckout.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      commit_hash: cdktf.stringToTerraform(this._commitHash),
      git_provider: cdktf.stringToTerraform(this._gitProvider),
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
      tag: cdktf.stringToTerraform(this._tag),
      url: cdktf.stringToTerraform(this._url),
      sparse_checkout: repoSparseCheckoutToTerraform(this._sparseCheckout.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commit_hash: {
        value: cdktf.stringToHclTerraform(this._commitHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_provider: {
        value: cdktf.stringToHclTerraform(this._gitProvider),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sparse_checkout: {
        value: repoSparseCheckoutToHclTerraform(this._sparseCheckout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepoSparseCheckoutList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
