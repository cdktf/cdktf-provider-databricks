# `libraryPluginframework` Submodule <a name="`libraryPluginframework` Submodule" id="@cdktf/provider-databricks.libraryPluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LibraryPluginframework <a name="LibraryPluginframework" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework databricks_library_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframework;

LibraryPluginframework.Builder.create(Construct scope, java.lang.String id)
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
    .clusterId(java.lang.String)
//  .cran(IResolvable)
//  .cran(java.util.List<LibraryPluginframeworkCran>)
//  .egg(java.lang.String)
//  .jar(java.lang.String)
//  .maven(IResolvable)
//  .maven(java.util.List<LibraryPluginframeworkMaven>)
//  .pypi(IResolvable)
//  .pypi(java.util.List<LibraryPluginframeworkPypi>)
//  .requirements(java.lang.String)
//  .whl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.cran">cran</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>></code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.egg">egg</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.jar">jar</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.maven">maven</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.pypi">pypi</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>></code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.requirements">requirements</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.whl">whl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}.

---

##### `cran`<sup>Optional</sup> <a name="cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.cran"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>>

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#cran LibraryPluginframework#cran}

---

##### `egg`<sup>Optional</sup> <a name="egg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.egg"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.jar"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.maven"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#maven LibraryPluginframework#maven}

---

##### `pypi`<sup>Optional</sup> <a name="pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.pypi"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>>

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#pypi LibraryPluginframework#pypi}

---

##### `requirements`<sup>Optional</sup> <a name="requirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.requirements"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}.

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.whl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran">putCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven">putMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi">putPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetCran">resetCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetEgg">resetEgg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetJar">resetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetMaven">resetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetPypi">resetPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetRequirements">resetRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetWhl">resetWhl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCran` <a name="putCran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran"></a>

```java
public void putCran(IResolvable OR java.util.List<LibraryPluginframeworkCran> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>>

---

##### `putMaven` <a name="putMaven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven"></a>

```java
public void putMaven(IResolvable OR java.util.List<LibraryPluginframeworkMaven> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>>

---

##### `putPypi` <a name="putPypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi"></a>

```java
public void putPypi(IResolvable OR java.util.List<LibraryPluginframeworkPypi> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>>

---

##### `resetCran` <a name="resetCran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetCran"></a>

```java
public void resetCran()
```

##### `resetEgg` <a name="resetEgg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetEgg"></a>

```java
public void resetEgg()
```

##### `resetJar` <a name="resetJar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetJar"></a>

```java
public void resetJar()
```

##### `resetMaven` <a name="resetMaven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetMaven"></a>

```java
public void resetMaven()
```

##### `resetPypi` <a name="resetPypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetPypi"></a>

```java
public void resetPypi()
```

##### `resetRequirements` <a name="resetRequirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetRequirements"></a>

```java
public void resetRequirements()
```

##### `resetWhl` <a name="resetWhl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetWhl"></a>

```java
public void resetWhl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LibraryPluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframework;

LibraryPluginframework.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframework;

LibraryPluginframework.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframework;

LibraryPluginframework.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframework;

LibraryPluginframework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LibraryPluginframework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LibraryPluginframework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LibraryPluginframework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LibraryPluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LibraryPluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList">LibraryPluginframeworkCranList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList">LibraryPluginframeworkMavenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList">LibraryPluginframeworkPypiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cranInput">cranInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.eggInput">eggInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jarInput">jarInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.mavenInput">mavenInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypiInput">pypiInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirementsInput">requirementsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whlInput">whlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.egg">egg</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jar">jar</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirements">requirements</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whl">whl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cran`<sup>Required</sup> <a name="cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cran"></a>

```java
public LibraryPluginframeworkCranList getCran();
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList">LibraryPluginframeworkCranList</a>

---

##### `maven`<sup>Required</sup> <a name="maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.maven"></a>

```java
public LibraryPluginframeworkMavenList getMaven();
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList">LibraryPluginframeworkMavenList</a>

---

##### `pypi`<sup>Required</sup> <a name="pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypi"></a>

```java
public LibraryPluginframeworkPypiList getPypi();
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList">LibraryPluginframeworkPypiList</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `cranInput`<sup>Optional</sup> <a name="cranInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cranInput"></a>

```java
public java.lang.Object getCranInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>>

---

##### `eggInput`<sup>Optional</sup> <a name="eggInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.eggInput"></a>

```java
public java.lang.String getEggInput();
```

- *Type:* java.lang.String

---

##### `jarInput`<sup>Optional</sup> <a name="jarInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jarInput"></a>

```java
public java.lang.String getJarInput();
```

- *Type:* java.lang.String

---

##### `mavenInput`<sup>Optional</sup> <a name="mavenInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.mavenInput"></a>

```java
public java.lang.Object getMavenInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>>

---

##### `pypiInput`<sup>Optional</sup> <a name="pypiInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypiInput"></a>

```java
public java.lang.Object getPypiInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>>

---

##### `requirementsInput`<sup>Optional</sup> <a name="requirementsInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirementsInput"></a>

```java
public java.lang.String getRequirementsInput();
```

- *Type:* java.lang.String

---

##### `whlInput`<sup>Optional</sup> <a name="whlInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whlInput"></a>

```java
public java.lang.String getWhlInput();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `egg`<sup>Required</sup> <a name="egg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.egg"></a>

```java
public java.lang.String getEgg();
```

- *Type:* java.lang.String

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirements"></a>

```java
public java.lang.String getRequirements();
```

- *Type:* java.lang.String

---

##### `whl`<sup>Required</sup> <a name="whl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whl"></a>

```java
public java.lang.String getWhl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LibraryPluginframeworkConfig <a name="LibraryPluginframeworkConfig" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframeworkConfig;

LibraryPluginframeworkConfig.builder()
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
    .clusterId(java.lang.String)
//  .cran(IResolvable)
//  .cran(java.util.List<LibraryPluginframeworkCran>)
//  .egg(java.lang.String)
//  .jar(java.lang.String)
//  .maven(IResolvable)
//  .maven(java.util.List<LibraryPluginframeworkMaven>)
//  .pypi(IResolvable)
//  .pypi(java.util.List<LibraryPluginframeworkPypi>)
//  .requirements(java.lang.String)
//  .whl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.cran">cran</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>></code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.egg">egg</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.jar">jar</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.maven">maven</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.pypi">pypi</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>></code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.requirements">requirements</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.whl">whl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}.

---

##### `cran`<sup>Optional</sup> <a name="cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.cran"></a>

```java
public java.lang.Object getCran();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>>

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#cran LibraryPluginframework#cran}

---

##### `egg`<sup>Optional</sup> <a name="egg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.egg"></a>

```java
public java.lang.String getEgg();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.maven"></a>

```java
public java.lang.Object getMaven();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#maven LibraryPluginframework#maven}

---

##### `pypi`<sup>Optional</sup> <a name="pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.pypi"></a>

```java
public java.lang.Object getPypi();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>>

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#pypi LibraryPluginframework#pypi}

---

##### `requirements`<sup>Optional</sup> <a name="requirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.requirements"></a>

```java
public java.lang.String getRequirements();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}.

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.whl"></a>

```java
public java.lang.String getWhl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}.

---

### LibraryPluginframeworkCran <a name="LibraryPluginframeworkCran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframeworkCran;

LibraryPluginframeworkCran.builder()
    .package(java.lang.String)
//  .repo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.package">package</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.repo">repo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

### LibraryPluginframeworkMaven <a name="LibraryPluginframeworkMaven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframeworkMaven;

LibraryPluginframeworkMaven.builder()
    .coordinates(java.lang.String)
//  .exclusions(java.util.List<java.lang.String>)
//  .repo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.coordinates">coordinates</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#coordinates LibraryPluginframework#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#exclusions LibraryPluginframework#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.repo">repo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.coordinates"></a>

```java
public java.lang.String getCoordinates();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#coordinates LibraryPluginframework#coordinates}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#exclusions LibraryPluginframework#exclusions}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

### LibraryPluginframeworkPypi <a name="LibraryPluginframeworkPypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframeworkPypi;

LibraryPluginframeworkPypi.builder()
    .package(java.lang.String)
//  .repo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.package">package</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.repo">repo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

## Classes <a name="Classes" id="Classes"></a>

### LibraryPluginframeworkCranList <a name="LibraryPluginframeworkCranList" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframeworkCranList;

new LibraryPluginframeworkCranList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.get"></a>

```java
public LibraryPluginframeworkCranOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>>

---


### LibraryPluginframeworkCranOutputReference <a name="LibraryPluginframeworkCranOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframeworkCranOutputReference;

new LibraryPluginframeworkCranOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resetRepo"></a>

```java
public void resetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.packageInput">packageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.package">package</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.packageInput"></a>

```java
public java.lang.String getPackageInput();
```

- *Type:* java.lang.String

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>

---


### LibraryPluginframeworkMavenList <a name="LibraryPluginframeworkMavenList" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframeworkMavenList;

new LibraryPluginframeworkMavenList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.get"></a>

```java
public LibraryPluginframeworkMavenOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>>

---


### LibraryPluginframeworkMavenOutputReference <a name="LibraryPluginframeworkMavenOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframeworkMavenOutputReference;

new LibraryPluginframeworkMavenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetRepo"></a>

```java
public void resetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinatesInput">coordinatesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinates">coordinates</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coordinatesInput`<sup>Optional</sup> <a name="coordinatesInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinatesInput"></a>

```java
public java.lang.String getCoordinatesInput();
```

- *Type:* java.lang.String

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusionsInput"></a>

```java
public java.util.List<java.lang.String> getExclusionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinates"></a>

```java
public java.lang.String getCoordinates();
```

- *Type:* java.lang.String

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>

---


### LibraryPluginframeworkPypiList <a name="LibraryPluginframeworkPypiList" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframeworkPypiList;

new LibraryPluginframeworkPypiList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.get"></a>

```java
public LibraryPluginframeworkPypiOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>>

---


### LibraryPluginframeworkPypiOutputReference <a name="LibraryPluginframeworkPypiOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library_pluginframework.LibraryPluginframeworkPypiOutputReference;

new LibraryPluginframeworkPypiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resetRepo"></a>

```java
public void resetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.packageInput">packageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.package">package</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.packageInput"></a>

```java
public java.lang.String getPackageInput();
```

- *Type:* java.lang.String

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>

---



