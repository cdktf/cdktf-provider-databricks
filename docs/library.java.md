# `library` Submodule <a name="`library` Submodule" id="@cdktf/provider-databricks.library"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Library <a name="Library" id="@cdktf/provider-databricks.library.Library"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library databricks_library}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.library.Library.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library.Library;

Library.Builder.create(Construct scope, java.lang.String id)
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
//  .cran(LibraryCran)
//  .egg(java.lang.String)
//  .id(java.lang.String)
//  .jar(java.lang.String)
//  .maven(LibraryMaven)
//  .pypi(LibraryPypi)
//  .requirements(java.lang.String)
//  .whl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#cluster_id Library#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a></code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.egg">egg</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#egg Library#egg}. |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#id Library#id}. |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.jar">jar</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#jar Library#jar}. |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a></code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.requirements">requirements</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#requirements Library#requirements}. |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.whl">whl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#whl Library#whl}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#cluster_id Library#cluster_id}.

---

##### `cran`<sup>Optional</sup> <a name="cran" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.cran"></a>

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a>

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#cran Library#cran}

---

##### `egg`<sup>Optional</sup> <a name="egg" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.egg"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#egg Library#egg}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#id Library#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.jar"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#jar Library#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.maven"></a>

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#maven Library#maven}

---

##### `pypi`<sup>Optional</sup> <a name="pypi" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.pypi"></a>

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a>

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#pypi Library#pypi}

---

##### `requirements`<sup>Optional</sup> <a name="requirements" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.requirements"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#requirements Library#requirements}.

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.whl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#whl Library#whl}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.Library.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.library.Library.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.library.Library.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.library.Library.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.library.Library.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.library.Library.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.library.Library.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.library.Library.putCran">putCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.putMaven">putMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.putPypi">putPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetCran">resetCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetEgg">resetEgg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetJar">resetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetMaven">resetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetPypi">resetPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetRequirements">resetRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetWhl">resetWhl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.library.Library.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.library.Library.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.library.Library.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.library.Library.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.library.Library.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.library.Library.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.library.Library.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.library.Library.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.library.Library.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.library.Library.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.library.Library.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.library.Library.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.library.Library.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.Library.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.library.Library.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.Library.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.library.Library.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.Library.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.library.Library.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.Library.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.library.Library.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.Library.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.library.Library.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.Library.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.library.Library.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.Library.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.library.Library.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.Library.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.library.Library.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.Library.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.library.Library.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.library.Library.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.library.Library.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.library.Library.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.library.Library.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.Library.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.library.Library.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.library.Library.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.library.Library.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.library.Library.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.library.Library.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.library.Library.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.library.Library.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCran` <a name="putCran" id="@cdktf/provider-databricks.library.Library.putCran"></a>

```java
public void putCran(LibraryCran value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.library.Library.putCran.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a>

---

##### `putMaven` <a name="putMaven" id="@cdktf/provider-databricks.library.Library.putMaven"></a>

```java
public void putMaven(LibraryMaven value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.library.Library.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a>

---

##### `putPypi` <a name="putPypi" id="@cdktf/provider-databricks.library.Library.putPypi"></a>

```java
public void putPypi(LibraryPypi value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.library.Library.putPypi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a>

---

##### `resetCran` <a name="resetCran" id="@cdktf/provider-databricks.library.Library.resetCran"></a>

```java
public void resetCran()
```

##### `resetEgg` <a name="resetEgg" id="@cdktf/provider-databricks.library.Library.resetEgg"></a>

```java
public void resetEgg()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.library.Library.resetId"></a>

```java
public void resetId()
```

##### `resetJar` <a name="resetJar" id="@cdktf/provider-databricks.library.Library.resetJar"></a>

```java
public void resetJar()
```

##### `resetMaven` <a name="resetMaven" id="@cdktf/provider-databricks.library.Library.resetMaven"></a>

```java
public void resetMaven()
```

##### `resetPypi` <a name="resetPypi" id="@cdktf/provider-databricks.library.Library.resetPypi"></a>

```java
public void resetPypi()
```

##### `resetRequirements` <a name="resetRequirements" id="@cdktf/provider-databricks.library.Library.resetRequirements"></a>

```java
public void resetRequirements()
```

##### `resetWhl` <a name="resetWhl" id="@cdktf/provider-databricks.library.Library.resetWhl"></a>

```java
public void resetWhl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.Library.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.library.Library.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Library resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.library.Library.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library.Library;

Library.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.library.Library.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.library.Library.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library.Library;

Library.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.library.Library.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.library.Library.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library.Library;

Library.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.library.Library.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.library.Library.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library.Library;

Library.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Library.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Library resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.library.Library.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.library.Library.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Library to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.library.Library.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Library that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.library.Library.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Library to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference">LibraryCranOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference">LibraryMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference">LibraryPypiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.cranInput">cranInput</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.eggInput">eggInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.jarInput">jarInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.mavenInput">mavenInput</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.pypiInput">pypiInput</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.requirementsInput">requirementsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.whlInput">whlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.egg">egg</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.jar">jar</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.requirements">requirements</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.whl">whl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.library.Library.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.library.Library.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.library.Library.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.library.Library.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.library.Library.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.library.Library.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.library.Library.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.library.Library.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.library.Library.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.library.Library.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.library.Library.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.library.Library.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.library.Library.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.library.Library.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cran`<sup>Required</sup> <a name="cran" id="@cdktf/provider-databricks.library.Library.property.cran"></a>

```java
public LibraryCranOutputReference getCran();
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference">LibraryCranOutputReference</a>

---

##### `maven`<sup>Required</sup> <a name="maven" id="@cdktf/provider-databricks.library.Library.property.maven"></a>

```java
public LibraryMavenOutputReference getMaven();
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference">LibraryMavenOutputReference</a>

---

##### `pypi`<sup>Required</sup> <a name="pypi" id="@cdktf/provider-databricks.library.Library.property.pypi"></a>

```java
public LibraryPypiOutputReference getPypi();
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference">LibraryPypiOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.library.Library.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `cranInput`<sup>Optional</sup> <a name="cranInput" id="@cdktf/provider-databricks.library.Library.property.cranInput"></a>

```java
public LibraryCran getCranInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a>

---

##### `eggInput`<sup>Optional</sup> <a name="eggInput" id="@cdktf/provider-databricks.library.Library.property.eggInput"></a>

```java
public java.lang.String getEggInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.library.Library.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jarInput`<sup>Optional</sup> <a name="jarInput" id="@cdktf/provider-databricks.library.Library.property.jarInput"></a>

```java
public java.lang.String getJarInput();
```

- *Type:* java.lang.String

---

##### `mavenInput`<sup>Optional</sup> <a name="mavenInput" id="@cdktf/provider-databricks.library.Library.property.mavenInput"></a>

```java
public LibraryMaven getMavenInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a>

---

##### `pypiInput`<sup>Optional</sup> <a name="pypiInput" id="@cdktf/provider-databricks.library.Library.property.pypiInput"></a>

```java
public LibraryPypi getPypiInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a>

---

##### `requirementsInput`<sup>Optional</sup> <a name="requirementsInput" id="@cdktf/provider-databricks.library.Library.property.requirementsInput"></a>

```java
public java.lang.String getRequirementsInput();
```

- *Type:* java.lang.String

---

##### `whlInput`<sup>Optional</sup> <a name="whlInput" id="@cdktf/provider-databricks.library.Library.property.whlInput"></a>

```java
public java.lang.String getWhlInput();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.library.Library.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `egg`<sup>Required</sup> <a name="egg" id="@cdktf/provider-databricks.library.Library.property.egg"></a>

```java
public java.lang.String getEgg();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.library.Library.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-databricks.library.Library.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="@cdktf/provider-databricks.library.Library.property.requirements"></a>

```java
public java.lang.String getRequirements();
```

- *Type:* java.lang.String

---

##### `whl`<sup>Required</sup> <a name="whl" id="@cdktf/provider-databricks.library.Library.property.whl"></a>

```java
public java.lang.String getWhl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.library.Library.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LibraryConfig <a name="LibraryConfig" id="@cdktf/provider-databricks.library.LibraryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.library.LibraryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library.LibraryConfig;

LibraryConfig.builder()
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
//  .cran(LibraryCran)
//  .egg(java.lang.String)
//  .id(java.lang.String)
//  .jar(java.lang.String)
//  .maven(LibraryMaven)
//  .pypi(LibraryPypi)
//  .requirements(java.lang.String)
//  .whl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#cluster_id Library#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a></code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.egg">egg</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#egg Library#egg}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#id Library#id}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.jar">jar</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#jar Library#jar}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a></code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.requirements">requirements</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#requirements Library#requirements}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.whl">whl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#whl Library#whl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.library.LibraryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.library.LibraryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.library.LibraryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.library.LibraryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.library.LibraryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.library.LibraryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.library.LibraryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.library.LibraryConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#cluster_id Library#cluster_id}.

---

##### `cran`<sup>Optional</sup> <a name="cran" id="@cdktf/provider-databricks.library.LibraryConfig.property.cran"></a>

```java
public LibraryCran getCran();
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a>

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#cran Library#cran}

---

##### `egg`<sup>Optional</sup> <a name="egg" id="@cdktf/provider-databricks.library.LibraryConfig.property.egg"></a>

```java
public java.lang.String getEgg();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#egg Library#egg}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.library.LibraryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#id Library#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.library.LibraryConfig.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#jar Library#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.library.LibraryConfig.property.maven"></a>

```java
public LibraryMaven getMaven();
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#maven Library#maven}

---

##### `pypi`<sup>Optional</sup> <a name="pypi" id="@cdktf/provider-databricks.library.LibraryConfig.property.pypi"></a>

```java
public LibraryPypi getPypi();
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a>

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#pypi Library#pypi}

---

##### `requirements`<sup>Optional</sup> <a name="requirements" id="@cdktf/provider-databricks.library.LibraryConfig.property.requirements"></a>

```java
public java.lang.String getRequirements();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#requirements Library#requirements}.

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.library.LibraryConfig.property.whl"></a>

```java
public java.lang.String getWhl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#whl Library#whl}.

---

### LibraryCran <a name="LibraryCran" id="@cdktf/provider-databricks.library.LibraryCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.library.LibraryCran.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library.LibraryCran;

LibraryCran.builder()
    .package(java.lang.String)
//  .repo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCran.property.package">package</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#package Library#package}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCran.property.repo">repo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#repo Library#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.library.LibraryCran.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#package Library#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.library.LibraryCran.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#repo Library#repo}.

---

### LibraryMaven <a name="LibraryMaven" id="@cdktf/provider-databricks.library.LibraryMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.library.LibraryMaven.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library.LibraryMaven;

LibraryMaven.builder()
    .coordinates(java.lang.String)
//  .exclusions(java.util.List<java.lang.String>)
//  .repo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMaven.property.coordinates">coordinates</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#coordinates Library#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMaven.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#exclusions Library#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMaven.property.repo">repo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#repo Library#repo}. |

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.library.LibraryMaven.property.coordinates"></a>

```java
public java.lang.String getCoordinates();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#coordinates Library#coordinates}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-databricks.library.LibraryMaven.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#exclusions Library#exclusions}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.library.LibraryMaven.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#repo Library#repo}.

---

### LibraryPypi <a name="LibraryPypi" id="@cdktf/provider-databricks.library.LibraryPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.library.LibraryPypi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library.LibraryPypi;

LibraryPypi.builder()
    .package(java.lang.String)
//  .repo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypi.property.package">package</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#package Library#package}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypi.property.repo">repo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#repo Library#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.library.LibraryPypi.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#package Library#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.library.LibraryPypi.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/library#repo Library#repo}.

---

## Classes <a name="Classes" id="Classes"></a>

### LibraryCranOutputReference <a name="LibraryCranOutputReference" id="@cdktf/provider-databricks.library.LibraryCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library.LibraryCranOutputReference;

new LibraryCranOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.resetRepo"></a>

```java
public void resetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.packageInput">packageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.package">package</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.packageInput"></a>

```java
public java.lang.String getPackageInput();
```

- *Type:* java.lang.String

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.internalValue"></a>

```java
public LibraryCran getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a>

---


### LibraryMavenOutputReference <a name="LibraryMavenOutputReference" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library.LibraryMavenOutputReference;

new LibraryMavenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.resetRepo"></a>

```java
public void resetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.coordinatesInput">coordinatesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.coordinates">coordinates</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coordinatesInput`<sup>Optional</sup> <a name="coordinatesInput" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.coordinatesInput"></a>

```java
public java.lang.String getCoordinatesInput();
```

- *Type:* java.lang.String

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.exclusionsInput"></a>

```java
public java.util.List<java.lang.String> getExclusionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.coordinates"></a>

```java
public java.lang.String getCoordinates();
```

- *Type:* java.lang.String

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.internalValue"></a>

```java
public LibraryMaven getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a>

---


### LibraryPypiOutputReference <a name="LibraryPypiOutputReference" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.library.LibraryPypiOutputReference;

new LibraryPypiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.resetRepo"></a>

```java
public void resetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.packageInput">packageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.package">package</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.packageInput"></a>

```java
public java.lang.String getPackageInput();
```

- *Type:* java.lang.String

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.internalValue"></a>

```java
public LibraryPypi getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a>

---



