# `appsSettingsCustomTemplate` Submodule <a name="`appsSettingsCustomTemplate` Submodule" id="@cdktf/provider-databricks.appsSettingsCustomTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsSettingsCustomTemplate <a name="AppsSettingsCustomTemplate" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template databricks_apps_settings_custom_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplate;

AppsSettingsCustomTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .gitProvider(java.lang.String)
    .gitRepo(java.lang.String)
    .manifest(AppsSettingsCustomTemplateManifest)
    .name(java.lang.String)
    .path(java.lang.String)
//  .description(java.lang.String)
//  .workspaceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.gitProvider">gitProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#git_provider AppsSettingsCustomTemplate#git_provider}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.gitRepo">gitRepo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#git_repo AppsSettingsCustomTemplate#git_repo}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#manifest AppsSettingsCustomTemplate#manifest}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#path AppsSettingsCustomTemplate#path}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#workspace_id AppsSettingsCustomTemplate#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gitProvider`<sup>Required</sup> <a name="gitProvider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.gitProvider"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#git_provider AppsSettingsCustomTemplate#git_provider}.

---

##### `gitRepo`<sup>Required</sup> <a name="gitRepo" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.gitRepo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#git_repo AppsSettingsCustomTemplate#git_repo}.

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.manifest"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#manifest AppsSettingsCustomTemplate#manifest}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#path AppsSettingsCustomTemplate#path}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#workspace_id AppsSettingsCustomTemplate#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putManifest">putManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManifest` <a name="putManifest" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putManifest"></a>

```java
public void putManifest(AppsSettingsCustomTemplateManifest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppsSettingsCustomTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplate;

AppsSettingsCustomTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplate;

AppsSettingsCustomTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplate;

AppsSettingsCustomTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplate;

AppsSettingsCustomTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppsSettingsCustomTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppsSettingsCustomTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppsSettingsCustomTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppsSettingsCustomTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppsSettingsCustomTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference">AppsSettingsCustomTemplateManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProviderInput">gitProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepoInput">gitRepoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifestInput">manifestInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProvider">gitProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepo">gitRepo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifest"></a>

```java
public AppsSettingsCustomTemplateManifestOutputReference getManifest();
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference">AppsSettingsCustomTemplateManifestOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gitProviderInput`<sup>Optional</sup> <a name="gitProviderInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProviderInput"></a>

```java
public java.lang.String getGitProviderInput();
```

- *Type:* java.lang.String

---

##### `gitRepoInput`<sup>Optional</sup> <a name="gitRepoInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepoInput"></a>

```java
public java.lang.String getGitRepoInput();
```

- *Type:* java.lang.String

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifestInput"></a>

```java
public java.lang.Object getManifestInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `gitProvider`<sup>Required</sup> <a name="gitProvider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProvider"></a>

```java
public java.lang.String getGitProvider();
```

- *Type:* java.lang.String

---

##### `gitRepo`<sup>Required</sup> <a name="gitRepo" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepo"></a>

```java
public java.lang.String getGitRepo();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsSettingsCustomTemplateConfig <a name="AppsSettingsCustomTemplateConfig" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateConfig;

AppsSettingsCustomTemplateConfig.builder()
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
    .gitProvider(java.lang.String)
    .gitRepo(java.lang.String)
    .manifest(AppsSettingsCustomTemplateManifest)
    .name(java.lang.String)
    .path(java.lang.String)
//  .description(java.lang.String)
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitProvider">gitProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#git_provider AppsSettingsCustomTemplate#git_provider}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitRepo">gitRepo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#git_repo AppsSettingsCustomTemplate#git_repo}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#manifest AppsSettingsCustomTemplate#manifest}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#path AppsSettingsCustomTemplate#path}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#workspace_id AppsSettingsCustomTemplate#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gitProvider`<sup>Required</sup> <a name="gitProvider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitProvider"></a>

```java
public java.lang.String getGitProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#git_provider AppsSettingsCustomTemplate#git_provider}.

---

##### `gitRepo`<sup>Required</sup> <a name="gitRepo" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitRepo"></a>

```java
public java.lang.String getGitRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#git_repo AppsSettingsCustomTemplate#git_repo}.

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.manifest"></a>

```java
public AppsSettingsCustomTemplateManifest getManifest();
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#manifest AppsSettingsCustomTemplate#manifest}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#path AppsSettingsCustomTemplate#path}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#workspace_id AppsSettingsCustomTemplate#workspace_id}.

---

### AppsSettingsCustomTemplateManifest <a name="AppsSettingsCustomTemplateManifest" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifest;

AppsSettingsCustomTemplateManifest.builder()
    .name(java.lang.String)
    .version(java.lang.Number)
//  .description(java.lang.String)
//  .resourceSpecs(IResolvable)
//  .resourceSpecs(java.util.List<AppsSettingsCustomTemplateManifestResourceSpecs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.version">version</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#version AppsSettingsCustomTemplate#version}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.resourceSpecs">resourceSpecs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#resource_specs AppsSettingsCustomTemplate#resource_specs}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#version AppsSettingsCustomTemplate#version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}.

---

##### `resourceSpecs`<sup>Optional</sup> <a name="resourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.resourceSpecs"></a>

```java
public java.lang.Object getResourceSpecs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#resource_specs AppsSettingsCustomTemplate#resource_specs}.

---

### AppsSettingsCustomTemplateManifestResourceSpecs <a name="AppsSettingsCustomTemplateManifestResourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestResourceSpecs;

AppsSettingsCustomTemplateManifestResourceSpecs.builder()
    .name(java.lang.String)
//  .description(java.lang.String)
//  .jobSpec(AppsSettingsCustomTemplateManifestResourceSpecsJobSpec)
//  .secretSpec(AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec)
//  .servingEndpointSpec(AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec)
//  .sqlWarehouseSpec(AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec)
//  .ucSecurableSpec(AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec">jobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#job_spec AppsSettingsCustomTemplate#job_spec}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec">secretSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#secret_spec AppsSettingsCustomTemplate#secret_spec}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec">servingEndpointSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#serving_endpoint_spec AppsSettingsCustomTemplate#serving_endpoint_spec}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec">sqlWarehouseSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#sql_warehouse_spec AppsSettingsCustomTemplate#sql_warehouse_spec}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec">ucSecurableSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#uc_securable_spec AppsSettingsCustomTemplate#uc_securable_spec}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}.

---

##### `jobSpec`<sup>Optional</sup> <a name="jobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec"></a>

```java
public AppsSettingsCustomTemplateManifestResourceSpecsJobSpec getJobSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#job_spec AppsSettingsCustomTemplate#job_spec}.

---

##### `secretSpec`<sup>Optional</sup> <a name="secretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec"></a>

```java
public AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec getSecretSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#secret_spec AppsSettingsCustomTemplate#secret_spec}.

---

##### `servingEndpointSpec`<sup>Optional</sup> <a name="servingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec"></a>

```java
public AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec getServingEndpointSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#serving_endpoint_spec AppsSettingsCustomTemplate#serving_endpoint_spec}.

---

##### `sqlWarehouseSpec`<sup>Optional</sup> <a name="sqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec"></a>

```java
public AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec getSqlWarehouseSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#sql_warehouse_spec AppsSettingsCustomTemplate#sql_warehouse_spec}.

---

##### `ucSecurableSpec`<sup>Optional</sup> <a name="ucSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec"></a>

```java
public AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec getUcSecurableSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#uc_securable_spec AppsSettingsCustomTemplate#uc_securable_spec}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsJobSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsJobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec;

AppsSettingsCustomTemplateManifestResourceSpecsJobSpec.builder()
    .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec;

AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.builder()
    .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec;

AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.builder()
    .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec;

AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.builder()
    .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec;

AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.builder()
    .permission(java.lang.String)
    .securableType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType">securableType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#securable_type AppsSettingsCustomTemplate#securable_type}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType"></a>

```java
public java.lang.String getSecurableType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/apps_settings_custom_template#securable_type AppsSettingsCustomTemplate#securable_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsSettingsCustomTemplateManifestOutputReference <a name="AppsSettingsCustomTemplateManifestOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestOutputReference;

new AppsSettingsCustomTemplateManifestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs">putResourceSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs">resetResourceSpecs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceSpecs` <a name="putResourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs"></a>

```java
public void putResourceSpecs(IResolvable OR java.util.List<AppsSettingsCustomTemplateManifestResourceSpecs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetResourceSpecs` <a name="resetResourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs"></a>

```java
public void resetResourceSpecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs">resourceSpecs</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList">AppsSettingsCustomTemplateManifestResourceSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput">resourceSpecsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceSpecs`<sup>Required</sup> <a name="resourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs"></a>

```java
public AppsSettingsCustomTemplateManifestResourceSpecsList getResourceSpecs();
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList">AppsSettingsCustomTemplateManifestResourceSpecsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceSpecsInput`<sup>Optional</sup> <a name="resourceSpecsInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput"></a>

```java
public java.lang.Object getResourceSpecsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference;

new AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsList <a name="AppsSettingsCustomTemplateManifestResourceSpecsList" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestResourceSpecsList;

new AppsSettingsCustomTemplateManifestResourceSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.get"></a>

```java
public AppsSettingsCustomTemplateManifestResourceSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>>

---


### AppsSettingsCustomTemplateManifestResourceSpecsOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference;

new AppsSettingsCustomTemplateManifestResourceSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec">putJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec">putSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec">putServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec">putSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec">putUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec">resetJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec">resetSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec">resetServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec">resetSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec">resetUcSecurableSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJobSpec` <a name="putJobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec"></a>

```java
public void putJobSpec(AppsSettingsCustomTemplateManifestResourceSpecsJobSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---

##### `putSecretSpec` <a name="putSecretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec"></a>

```java
public void putSecretSpec(AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---

##### `putServingEndpointSpec` <a name="putServingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec"></a>

```java
public void putServingEndpointSpec(AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---

##### `putSqlWarehouseSpec` <a name="putSqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec"></a>

```java
public void putSqlWarehouseSpec(AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `putUcSecurableSpec` <a name="putUcSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec"></a>

```java
public void putUcSecurableSpec(AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetJobSpec` <a name="resetJobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec"></a>

```java
public void resetJobSpec()
```

##### `resetSecretSpec` <a name="resetSecretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec"></a>

```java
public void resetSecretSpec()
```

##### `resetServingEndpointSpec` <a name="resetServingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec"></a>

```java
public void resetServingEndpointSpec()
```

##### `resetSqlWarehouseSpec` <a name="resetSqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec"></a>

```java
public void resetSqlWarehouseSpec()
```

##### `resetUcSecurableSpec` <a name="resetUcSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec"></a>

```java
public void resetUcSecurableSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec">jobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec">secretSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec">servingEndpointSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec">sqlWarehouseSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec">ucSecurableSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput">jobSpecInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput">secretSpecInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput">servingEndpointSpecInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput">sqlWarehouseSpecInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput">ucSecurableSpecInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jobSpec`<sup>Required</sup> <a name="jobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec"></a>

```java
public AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference getJobSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a>

---

##### `secretSpec`<sup>Required</sup> <a name="secretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec"></a>

```java
public AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference getSecretSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a>

---

##### `servingEndpointSpec`<sup>Required</sup> <a name="servingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec"></a>

```java
public AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference getServingEndpointSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a>

---

##### `sqlWarehouseSpec`<sup>Required</sup> <a name="sqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec"></a>

```java
public AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference getSqlWarehouseSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a>

---

##### `ucSecurableSpec`<sup>Required</sup> <a name="ucSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec"></a>

```java
public AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference getUcSecurableSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `jobSpecInput`<sup>Optional</sup> <a name="jobSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput"></a>

```java
public java.lang.Object getJobSpecInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secretSpecInput`<sup>Optional</sup> <a name="secretSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput"></a>

```java
public java.lang.Object getSecretSpecInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---

##### `servingEndpointSpecInput`<sup>Optional</sup> <a name="servingEndpointSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput"></a>

```java
public java.lang.Object getServingEndpointSpecInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---

##### `sqlWarehouseSpecInput`<sup>Optional</sup> <a name="sqlWarehouseSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput"></a>

```java
public java.lang.Object getSqlWarehouseSpecInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `ucSecurableSpecInput`<sup>Optional</sup> <a name="ucSecurableSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput"></a>

```java
public java.lang.Object getUcSecurableSpecInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference;

new AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference;

new AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference;

new AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.apps_settings_custom_template.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference;

new AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput">securableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType">securableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `securableTypeInput`<sup>Optional</sup> <a name="securableTypeInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput"></a>

```java
public java.lang.String getSecurableTypeInput();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType"></a>

```java
public java.lang.String getSecurableType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---



