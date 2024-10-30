# `entitlements` Submodule <a name="`entitlements` Submodule" id="@cdktf/provider-databricks.entitlements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Entitlements <a name="Entitlements" id="@cdktf/provider-databricks.entitlements.Entitlements"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements databricks_entitlements}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entitlements.Entitlements;

Entitlements.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .allowClusterCreate(java.lang.Boolean)
//  .allowClusterCreate(IResolvable)
//  .allowInstancePoolCreate(java.lang.Boolean)
//  .allowInstancePoolCreate(IResolvable)
//  .databricksSqlAccess(java.lang.Boolean)
//  .databricksSqlAccess(IResolvable)
//  .groupId(java.lang.String)
//  .id(java.lang.String)
//  .servicePrincipalId(java.lang.String)
//  .userId(java.lang.String)
//  .workspaceAccess(java.lang.Boolean)
//  .workspaceAccess(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.allowClusterCreate">allowClusterCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#allow_cluster_create Entitlements#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#allow_instance_pool_create Entitlements#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.databricksSqlAccess">databricksSqlAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#databricks_sql_access Entitlements#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#group_id Entitlements#group_id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#id Entitlements#id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#service_principal_id Entitlements#service_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#user_id Entitlements#user_id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.workspaceAccess">workspaceAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#workspace_access Entitlements#workspace_access}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowClusterCreate`<sup>Optional</sup> <a name="allowClusterCreate" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.allowClusterCreate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#allow_cluster_create Entitlements#allow_cluster_create}.

---

##### `allowInstancePoolCreate`<sup>Optional</sup> <a name="allowInstancePoolCreate" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.allowInstancePoolCreate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#allow_instance_pool_create Entitlements#allow_instance_pool_create}.

---

##### `databricksSqlAccess`<sup>Optional</sup> <a name="databricksSqlAccess" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.databricksSqlAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#databricks_sql_access Entitlements#databricks_sql_access}.

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#group_id Entitlements#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#id Entitlements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.servicePrincipalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#service_principal_id Entitlements#service_principal_id}.

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#user_id Entitlements#user_id}.

---

##### `workspaceAccess`<sup>Optional</sup> <a name="workspaceAccess" id="@cdktf/provider-databricks.entitlements.Entitlements.Initializer.parameter.workspaceAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#workspace_access Entitlements#workspace_access}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetAllowClusterCreate">resetAllowClusterCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetAllowInstancePoolCreate">resetAllowInstancePoolCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetDatabricksSqlAccess">resetDatabricksSqlAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetServicePrincipalId">resetServicePrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetUserId">resetUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.resetWorkspaceAccess">resetWorkspaceAccess</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.entitlements.Entitlements.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.entitlements.Entitlements.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.entitlements.Entitlements.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.entitlements.Entitlements.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.entitlements.Entitlements.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.entitlements.Entitlements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.entitlements.Entitlements.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.entitlements.Entitlements.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.entitlements.Entitlements.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.entitlements.Entitlements.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.entitlements.Entitlements.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.entitlements.Entitlements.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.entitlements.Entitlements.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.entitlements.Entitlements.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.Entitlements.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.entitlements.Entitlements.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.entitlements.Entitlements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.entitlements.Entitlements.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.Entitlements.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.entitlements.Entitlements.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.entitlements.Entitlements.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.entitlements.Entitlements.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.entitlements.Entitlements.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.Entitlements.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowClusterCreate` <a name="resetAllowClusterCreate" id="@cdktf/provider-databricks.entitlements.Entitlements.resetAllowClusterCreate"></a>

```java
public void resetAllowClusterCreate()
```

##### `resetAllowInstancePoolCreate` <a name="resetAllowInstancePoolCreate" id="@cdktf/provider-databricks.entitlements.Entitlements.resetAllowInstancePoolCreate"></a>

```java
public void resetAllowInstancePoolCreate()
```

##### `resetDatabricksSqlAccess` <a name="resetDatabricksSqlAccess" id="@cdktf/provider-databricks.entitlements.Entitlements.resetDatabricksSqlAccess"></a>

```java
public void resetDatabricksSqlAccess()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-databricks.entitlements.Entitlements.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.entitlements.Entitlements.resetId"></a>

```java
public void resetId()
```

##### `resetServicePrincipalId` <a name="resetServicePrincipalId" id="@cdktf/provider-databricks.entitlements.Entitlements.resetServicePrincipalId"></a>

```java
public void resetServicePrincipalId()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-databricks.entitlements.Entitlements.resetUserId"></a>

```java
public void resetUserId()
```

##### `resetWorkspaceAccess` <a name="resetWorkspaceAccess" id="@cdktf/provider-databricks.entitlements.Entitlements.resetWorkspaceAccess"></a>

```java
public void resetWorkspaceAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Entitlements resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.entitlements.Entitlements.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entitlements.Entitlements;

Entitlements.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.entitlements.Entitlements.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.entitlements.Entitlements.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entitlements.Entitlements;

Entitlements.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.entitlements.Entitlements.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.entitlements.Entitlements.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entitlements.Entitlements;

Entitlements.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.entitlements.Entitlements.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.entitlements.Entitlements.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entitlements.Entitlements;

Entitlements.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Entitlements.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Entitlements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.entitlements.Entitlements.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.entitlements.Entitlements.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Entitlements to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.entitlements.Entitlements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Entitlements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.entitlements.Entitlements.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Entitlements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.allowClusterCreateInput">allowClusterCreateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.allowInstancePoolCreateInput">allowInstancePoolCreateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.databricksSqlAccessInput">databricksSqlAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.workspaceAccessInput">workspaceAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.allowClusterCreate">allowClusterCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.workspaceAccess">workspaceAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.entitlements.Entitlements.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.entitlements.Entitlements.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.entitlements.Entitlements.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.entitlements.Entitlements.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.entitlements.Entitlements.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.entitlements.Entitlements.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.entitlements.Entitlements.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.entitlements.Entitlements.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.entitlements.Entitlements.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.entitlements.Entitlements.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.entitlements.Entitlements.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.entitlements.Entitlements.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.entitlements.Entitlements.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.entitlements.Entitlements.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowClusterCreateInput`<sup>Optional</sup> <a name="allowClusterCreateInput" id="@cdktf/provider-databricks.entitlements.Entitlements.property.allowClusterCreateInput"></a>

```java
public java.lang.Object getAllowClusterCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowInstancePoolCreateInput`<sup>Optional</sup> <a name="allowInstancePoolCreateInput" id="@cdktf/provider-databricks.entitlements.Entitlements.property.allowInstancePoolCreateInput"></a>

```java
public java.lang.Object getAllowInstancePoolCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databricksSqlAccessInput`<sup>Optional</sup> <a name="databricksSqlAccessInput" id="@cdktf/provider-databricks.entitlements.Entitlements.property.databricksSqlAccessInput"></a>

```java
public java.lang.Object getDatabricksSqlAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-databricks.entitlements.Entitlements.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.entitlements.Entitlements.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-databricks.entitlements.Entitlements.property.servicePrincipalIdInput"></a>

```java
public java.lang.String getServicePrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-databricks.entitlements.Entitlements.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceAccessInput`<sup>Optional</sup> <a name="workspaceAccessInput" id="@cdktf/provider-databricks.entitlements.Entitlements.property.workspaceAccessInput"></a>

```java
public java.lang.Object getWorkspaceAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowClusterCreate`<sup>Required</sup> <a name="allowClusterCreate" id="@cdktf/provider-databricks.entitlements.Entitlements.property.allowClusterCreate"></a>

```java
public java.lang.Object getAllowClusterCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowInstancePoolCreate`<sup>Required</sup> <a name="allowInstancePoolCreate" id="@cdktf/provider-databricks.entitlements.Entitlements.property.allowInstancePoolCreate"></a>

```java
public java.lang.Object getAllowInstancePoolCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databricksSqlAccess`<sup>Required</sup> <a name="databricksSqlAccess" id="@cdktf/provider-databricks.entitlements.Entitlements.property.databricksSqlAccess"></a>

```java
public java.lang.Object getDatabricksSqlAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-databricks.entitlements.Entitlements.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.Entitlements.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.entitlements.Entitlements.property.servicePrincipalId"></a>

```java
public java.lang.String getServicePrincipalId();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-databricks.entitlements.Entitlements.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `workspaceAccess`<sup>Required</sup> <a name="workspaceAccess" id="@cdktf/provider-databricks.entitlements.Entitlements.property.workspaceAccess"></a>

```java
public java.lang.Object getWorkspaceAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.entitlements.Entitlements.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.entitlements.Entitlements.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EntitlementsConfig <a name="EntitlementsConfig" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entitlements.EntitlementsConfig;

EntitlementsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .allowClusterCreate(java.lang.Boolean)
//  .allowClusterCreate(IResolvable)
//  .allowInstancePoolCreate(java.lang.Boolean)
//  .allowInstancePoolCreate(IResolvable)
//  .databricksSqlAccess(java.lang.Boolean)
//  .databricksSqlAccess(IResolvable)
//  .groupId(java.lang.String)
//  .id(java.lang.String)
//  .servicePrincipalId(java.lang.String)
//  .userId(java.lang.String)
//  .workspaceAccess(java.lang.Boolean)
//  .workspaceAccess(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.allowClusterCreate">allowClusterCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#allow_cluster_create Entitlements#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#allow_instance_pool_create Entitlements#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#databricks_sql_access Entitlements#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#group_id Entitlements#group_id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#id Entitlements#id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#service_principal_id Entitlements#service_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#user_id Entitlements#user_id}. |
| <code><a href="#@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.workspaceAccess">workspaceAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#workspace_access Entitlements#workspace_access}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowClusterCreate`<sup>Optional</sup> <a name="allowClusterCreate" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.allowClusterCreate"></a>

```java
public java.lang.Object getAllowClusterCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#allow_cluster_create Entitlements#allow_cluster_create}.

---

##### `allowInstancePoolCreate`<sup>Optional</sup> <a name="allowInstancePoolCreate" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.allowInstancePoolCreate"></a>

```java
public java.lang.Object getAllowInstancePoolCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#allow_instance_pool_create Entitlements#allow_instance_pool_create}.

---

##### `databricksSqlAccess`<sup>Optional</sup> <a name="databricksSqlAccess" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.databricksSqlAccess"></a>

```java
public java.lang.Object getDatabricksSqlAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#databricks_sql_access Entitlements#databricks_sql_access}.

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#group_id Entitlements#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#id Entitlements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.servicePrincipalId"></a>

```java
public java.lang.String getServicePrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#service_principal_id Entitlements#service_principal_id}.

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#user_id Entitlements#user_id}.

---

##### `workspaceAccess`<sup>Optional</sup> <a name="workspaceAccess" id="@cdktf/provider-databricks.entitlements.EntitlementsConfig.property.workspaceAccess"></a>

```java
public java.lang.Object getWorkspaceAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/entitlements#workspace_access Entitlements#workspace_access}.

---



