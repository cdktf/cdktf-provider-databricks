# `servicePrincipal` Submodule <a name="`servicePrincipal` Submodule" id="@cdktf/provider-databricks.servicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipal <a name="ServicePrincipal" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal databricks_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal.ServicePrincipal;

ServicePrincipal.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .aclPrincipalId(java.lang.String)
//  .active(java.lang.Boolean|IResolvable)
//  .allowClusterCreate(java.lang.Boolean|IResolvable)
//  .allowInstancePoolCreate(java.lang.Boolean|IResolvable)
//  .applicationId(java.lang.String)
//  .databricksSqlAccess(java.lang.Boolean|IResolvable)
//  .disableAsUserDeletion(java.lang.Boolean|IResolvable)
//  .displayName(java.lang.String)
//  .externalId(java.lang.String)
//  .force(java.lang.Boolean|IResolvable)
//  .forceDeleteHomeDir(java.lang.Boolean|IResolvable)
//  .forceDeleteRepos(java.lang.Boolean|IResolvable)
//  .home(java.lang.String)
//  .id(java.lang.String)
//  .repos(java.lang.String)
//  .workspaceAccess(java.lang.Boolean|IResolvable)
//  .workspaceConsume(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.aclPrincipalId">aclPrincipalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#active ServicePrincipal#active}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.allowClusterCreate">allowClusterCreate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.databricksSqlAccess">databricksSqlAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.disableAsUserDeletion">disableAsUserDeletion</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.force">force</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#force ServicePrincipal#force}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forceDeleteHomeDir">forceDeleteHomeDir</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forceDeleteRepos">forceDeleteRepos</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.home">home</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#home ServicePrincipal#home}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#id ServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.repos">repos</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#repos ServicePrincipal#repos}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.workspaceAccess">workspaceAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.workspaceConsume">workspaceConsume</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aclPrincipalId`<sup>Optional</sup> <a name="aclPrincipalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.aclPrincipalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#active ServicePrincipal#active}.

---

##### `allowClusterCreate`<sup>Optional</sup> <a name="allowClusterCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.allowClusterCreate"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}.

---

##### `allowInstancePoolCreate`<sup>Optional</sup> <a name="allowInstancePoolCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.allowInstancePoolCreate"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}.

---

##### `databricksSqlAccess`<sup>Optional</sup> <a name="databricksSqlAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.databricksSqlAccess"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}.

---

##### `disableAsUserDeletion`<sup>Optional</sup> <a name="disableAsUserDeletion" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.disableAsUserDeletion"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.force"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#force ServicePrincipal#force}.

---

##### `forceDeleteHomeDir`<sup>Optional</sup> <a name="forceDeleteHomeDir" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forceDeleteHomeDir"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}.

---

##### `forceDeleteRepos`<sup>Optional</sup> <a name="forceDeleteRepos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forceDeleteRepos"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.home"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#home ServicePrincipal#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#id ServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.repos"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#repos ServicePrincipal#repos}.

---

##### `workspaceAccess`<sup>Optional</sup> <a name="workspaceAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.workspaceAccess"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}.

---

##### `workspaceConsume`<sup>Optional</sup> <a name="workspaceConsume" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.workspaceConsume"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAclPrincipalId">resetAclPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowClusterCreate">resetAllowClusterCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowInstancePoolCreate">resetAllowInstancePoolCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDatabricksSqlAccess">resetDatabricksSqlAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDisableAsUserDeletion">resetDisableAsUserDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteHomeDir">resetForceDeleteHomeDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteRepos">resetForceDeleteRepos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetHome">resetHome</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetRepos">resetRepos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceAccess">resetWorkspaceAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceConsume">resetWorkspaceConsume</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAclPrincipalId` <a name="resetAclPrincipalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAclPrincipalId"></a>

```java
public void resetAclPrincipalId()
```

##### `resetActive` <a name="resetActive" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetActive"></a>

```java
public void resetActive()
```

##### `resetAllowClusterCreate` <a name="resetAllowClusterCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowClusterCreate"></a>

```java
public void resetAllowClusterCreate()
```

##### `resetAllowInstancePoolCreate` <a name="resetAllowInstancePoolCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowInstancePoolCreate"></a>

```java
public void resetAllowInstancePoolCreate()
```

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetApplicationId"></a>

```java
public void resetApplicationId()
```

##### `resetDatabricksSqlAccess` <a name="resetDatabricksSqlAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDatabricksSqlAccess"></a>

```java
public void resetDatabricksSqlAccess()
```

##### `resetDisableAsUserDeletion` <a name="resetDisableAsUserDeletion" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDisableAsUserDeletion"></a>

```java
public void resetDisableAsUserDeletion()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetForce` <a name="resetForce" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForce"></a>

```java
public void resetForce()
```

##### `resetForceDeleteHomeDir` <a name="resetForceDeleteHomeDir" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteHomeDir"></a>

```java
public void resetForceDeleteHomeDir()
```

##### `resetForceDeleteRepos` <a name="resetForceDeleteRepos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteRepos"></a>

```java
public void resetForceDeleteRepos()
```

##### `resetHome` <a name="resetHome" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetHome"></a>

```java
public void resetHome()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetId"></a>

```java
public void resetId()
```

##### `resetRepos` <a name="resetRepos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetRepos"></a>

```java
public void resetRepos()
```

##### `resetWorkspaceAccess` <a name="resetWorkspaceAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceAccess"></a>

```java
public void resetWorkspaceAccess()
```

##### `resetWorkspaceConsume` <a name="resetWorkspaceConsume" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceConsume"></a>

```java
public void resetWorkspaceConsume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipal resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal.ServicePrincipal;

ServicePrincipal.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal.ServicePrincipal;

ServicePrincipal.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal.ServicePrincipal;

ServicePrincipal.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal.ServicePrincipal;

ServicePrincipal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicePrincipal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServicePrincipal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicePrincipal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicePrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalIdInput">aclPrincipalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreateInput">allowClusterCreateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreateInput">allowInstancePoolCreateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccessInput">databricksSqlAccessInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletionInput">disableAsUserDeletionInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDirInput">forceDeleteHomeDirInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteReposInput">forceDeleteReposInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceInput">forceInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.homeInput">homeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.reposInput">reposInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccessInput">workspaceAccessInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsumeInput">workspaceConsumeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalId">aclPrincipalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.active">active</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreate">allowClusterCreate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletion">disableAsUserDeletion</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.force">force</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDir">forceDeleteHomeDir</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteRepos">forceDeleteRepos</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.home">home</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.repos">repos</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccess">workspaceAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsume">workspaceConsume</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aclPrincipalIdInput`<sup>Optional</sup> <a name="aclPrincipalIdInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalIdInput"></a>

```java
public java.lang.String getAclPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.activeInput"></a>

```java
public java.lang.Boolean|IResolvable getActiveInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `allowClusterCreateInput`<sup>Optional</sup> <a name="allowClusterCreateInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreateInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowClusterCreateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `allowInstancePoolCreateInput`<sup>Optional</sup> <a name="allowInstancePoolCreateInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreateInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowInstancePoolCreateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `databricksSqlAccessInput`<sup>Optional</sup> <a name="databricksSqlAccessInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getDatabricksSqlAccessInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `disableAsUserDeletionInput`<sup>Optional</sup> <a name="disableAsUserDeletionInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletionInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableAsUserDeletionInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `forceDeleteHomeDirInput`<sup>Optional</sup> <a name="forceDeleteHomeDirInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDirInput"></a>

```java
public java.lang.Boolean|IResolvable getForceDeleteHomeDirInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `forceDeleteReposInput`<sup>Optional</sup> <a name="forceDeleteReposInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteReposInput"></a>

```java
public java.lang.Boolean|IResolvable getForceDeleteReposInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceInput"></a>

```java
public java.lang.Boolean|IResolvable getForceInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `homeInput`<sup>Optional</sup> <a name="homeInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.homeInput"></a>

```java
public java.lang.String getHomeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `reposInput`<sup>Optional</sup> <a name="reposInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.reposInput"></a>

```java
public java.lang.String getReposInput();
```

- *Type:* java.lang.String

---

##### `workspaceAccessInput`<sup>Optional</sup> <a name="workspaceAccessInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getWorkspaceAccessInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `workspaceConsumeInput`<sup>Optional</sup> <a name="workspaceConsumeInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsumeInput"></a>

```java
public java.lang.Boolean|IResolvable getWorkspaceConsumeInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `aclPrincipalId`<sup>Required</sup> <a name="aclPrincipalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalId"></a>

```java
public java.lang.String getAclPrincipalId();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `allowClusterCreate`<sup>Required</sup> <a name="allowClusterCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreate"></a>

```java
public java.lang.Boolean|IResolvable getAllowClusterCreate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `allowInstancePoolCreate`<sup>Required</sup> <a name="allowInstancePoolCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreate"></a>

```java
public java.lang.Boolean|IResolvable getAllowInstancePoolCreate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `databricksSqlAccess`<sup>Required</sup> <a name="databricksSqlAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccess"></a>

```java
public java.lang.Boolean|IResolvable getDatabricksSqlAccess();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `disableAsUserDeletion`<sup>Required</sup> <a name="disableAsUserDeletion" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletion"></a>

```java
public java.lang.Boolean|IResolvable getDisableAsUserDeletion();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.force"></a>

```java
public java.lang.Boolean|IResolvable getForce();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `forceDeleteHomeDir`<sup>Required</sup> <a name="forceDeleteHomeDir" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDir"></a>

```java
public java.lang.Boolean|IResolvable getForceDeleteHomeDir();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `forceDeleteRepos`<sup>Required</sup> <a name="forceDeleteRepos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteRepos"></a>

```java
public java.lang.Boolean|IResolvable getForceDeleteRepos();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `home`<sup>Required</sup> <a name="home" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.home"></a>

```java
public java.lang.String getHome();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repos`<sup>Required</sup> <a name="repos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.repos"></a>

```java
public java.lang.String getRepos();
```

- *Type:* java.lang.String

---

##### `workspaceAccess`<sup>Required</sup> <a name="workspaceAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccess"></a>

```java
public java.lang.Boolean|IResolvable getWorkspaceAccess();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `workspaceConsume`<sup>Required</sup> <a name="workspaceConsume" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsume"></a>

```java
public java.lang.Boolean|IResolvable getWorkspaceConsume();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalConfig <a name="ServicePrincipalConfig" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.service_principal.ServicePrincipalConfig;

ServicePrincipalConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .aclPrincipalId(java.lang.String)
//  .active(java.lang.Boolean|IResolvable)
//  .allowClusterCreate(java.lang.Boolean|IResolvable)
//  .allowInstancePoolCreate(java.lang.Boolean|IResolvable)
//  .applicationId(java.lang.String)
//  .databricksSqlAccess(java.lang.Boolean|IResolvable)
//  .disableAsUserDeletion(java.lang.Boolean|IResolvable)
//  .displayName(java.lang.String)
//  .externalId(java.lang.String)
//  .force(java.lang.Boolean|IResolvable)
//  .forceDeleteHomeDir(java.lang.Boolean|IResolvable)
//  .forceDeleteRepos(java.lang.Boolean|IResolvable)
//  .home(java.lang.String)
//  .id(java.lang.String)
//  .repos(java.lang.String)
//  .workspaceAccess(java.lang.Boolean|IResolvable)
//  .workspaceConsume(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.aclPrincipalId">aclPrincipalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.active">active</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#active ServicePrincipal#active}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowClusterCreate">allowClusterCreate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.disableAsUserDeletion">disableAsUserDeletion</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.force">force</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#force ServicePrincipal#force}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteHomeDir">forceDeleteHomeDir</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteRepos">forceDeleteRepos</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.home">home</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#home ServicePrincipal#home}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#id ServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.repos">repos</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#repos ServicePrincipal#repos}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceAccess">workspaceAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceConsume">workspaceConsume</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aclPrincipalId`<sup>Optional</sup> <a name="aclPrincipalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.aclPrincipalId"></a>

```java
public java.lang.String getAclPrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#active ServicePrincipal#active}.

---

##### `allowClusterCreate`<sup>Optional</sup> <a name="allowClusterCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowClusterCreate"></a>

```java
public java.lang.Boolean|IResolvable getAllowClusterCreate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}.

---

##### `allowInstancePoolCreate`<sup>Optional</sup> <a name="allowInstancePoolCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowInstancePoolCreate"></a>

```java
public java.lang.Boolean|IResolvable getAllowInstancePoolCreate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}.

---

##### `databricksSqlAccess`<sup>Optional</sup> <a name="databricksSqlAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.databricksSqlAccess"></a>

```java
public java.lang.Boolean|IResolvable getDatabricksSqlAccess();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}.

---

##### `disableAsUserDeletion`<sup>Optional</sup> <a name="disableAsUserDeletion" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.disableAsUserDeletion"></a>

```java
public java.lang.Boolean|IResolvable getDisableAsUserDeletion();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.force"></a>

```java
public java.lang.Boolean|IResolvable getForce();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#force ServicePrincipal#force}.

---

##### `forceDeleteHomeDir`<sup>Optional</sup> <a name="forceDeleteHomeDir" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteHomeDir"></a>

```java
public java.lang.Boolean|IResolvable getForceDeleteHomeDir();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}.

---

##### `forceDeleteRepos`<sup>Optional</sup> <a name="forceDeleteRepos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteRepos"></a>

```java
public java.lang.Boolean|IResolvable getForceDeleteRepos();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.home"></a>

```java
public java.lang.String getHome();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#home ServicePrincipal#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#id ServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.repos"></a>

```java
public java.lang.String getRepos();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#repos ServicePrincipal#repos}.

---

##### `workspaceAccess`<sup>Optional</sup> <a name="workspaceAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceAccess"></a>

```java
public java.lang.Boolean|IResolvable getWorkspaceAccess();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}.

---

##### `workspaceConsume`<sup>Optional</sup> <a name="workspaceConsume" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceConsume"></a>

```java
public java.lang.Boolean|IResolvable getWorkspaceConsume();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}.

---



