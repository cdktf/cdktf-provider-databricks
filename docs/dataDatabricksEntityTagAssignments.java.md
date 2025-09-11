# `dataDatabricksEntityTagAssignments` Submodule <a name="`dataDatabricksEntityTagAssignments` Submodule" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEntityTagAssignments <a name="DataDatabricksEntityTagAssignments" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments databricks_entity_tag_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_entity_tag_assignments.DataDatabricksEntityTagAssignments;

DataDatabricksEntityTagAssignments.Builder.create(Construct scope, java.lang.String id)
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
    .entityName(java.lang.String)
    .entityType(java.lang.String)
//  .workspaceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.entityName">entityName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.entityName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.entityType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksEntityTagAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_entity_tag_assignments.DataDatabricksEntityTagAssignments;

DataDatabricksEntityTagAssignments.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_entity_tag_assignments.DataDatabricksEntityTagAssignments;

DataDatabricksEntityTagAssignments.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_entity_tag_assignments.DataDatabricksEntityTagAssignments;

DataDatabricksEntityTagAssignments.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_entity_tag_assignments.DataDatabricksEntityTagAssignments;

DataDatabricksEntityTagAssignments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksEntityTagAssignments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksEntityTagAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksEntityTagAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksEntityTagAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksEntityTagAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tagAssignments">tagAssignments</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList">DataDatabricksEntityTagAssignmentsTagAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityNameInput">entityNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityName">entityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `tagAssignments`<sup>Required</sup> <a name="tagAssignments" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tagAssignments"></a>

```java
public DataDatabricksEntityTagAssignmentsTagAssignmentsList getTagAssignments();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList">DataDatabricksEntityTagAssignmentsTagAssignmentsList</a>

---

##### `entityNameInput`<sup>Optional</sup> <a name="entityNameInput" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityNameInput"></a>

```java
public java.lang.String getEntityNameInput();
```

- *Type:* java.lang.String

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityName"></a>

```java
public java.lang.String getEntityName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEntityTagAssignmentsConfig <a name="DataDatabricksEntityTagAssignmentsConfig" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_entity_tag_assignments.DataDatabricksEntityTagAssignmentsConfig;

DataDatabricksEntityTagAssignmentsConfig.builder()
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
    .entityName(java.lang.String)
    .entityType(java.lang.String)
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityName">entityName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityName"></a>

```java
public java.lang.String getEntityName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}.

---

### DataDatabricksEntityTagAssignmentsTagAssignments <a name="DataDatabricksEntityTagAssignmentsTagAssignments" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_entity_tag_assignments.DataDatabricksEntityTagAssignmentsTagAssignments;

DataDatabricksEntityTagAssignmentsTagAssignments.builder()
    .entityName(java.lang.String)
    .entityType(java.lang.String)
    .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityName">entityName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#tag_key DataDatabricksEntityTagAssignments#tag_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#tag_value DataDatabricksEntityTagAssignments#tag_value}. |

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityName"></a>

```java
public java.lang.String getEntityName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#tag_key DataDatabricksEntityTagAssignments#tag_key}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/entity_tag_assignments#tag_value DataDatabricksEntityTagAssignments#tag_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEntityTagAssignmentsTagAssignmentsList <a name="DataDatabricksEntityTagAssignmentsTagAssignmentsList" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_entity_tag_assignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList;

new DataDatabricksEntityTagAssignmentsTagAssignmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.get"></a>

```java
public DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a>>

---


### DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference <a name="DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_entity_tag_assignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference;

new DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityNameInput">entityNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityName">entityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityNameInput`<sup>Optional</sup> <a name="entityNameInput" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityNameInput"></a>

```java
public java.lang.String getEntityNameInput();
```

- *Type:* java.lang.String

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityName"></a>

```java
public java.lang.String getEntityName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue"></a>

```java
public DataDatabricksEntityTagAssignmentsTagAssignments getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a>

---



