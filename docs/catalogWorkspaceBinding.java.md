# `catalogWorkspaceBinding` Submodule <a name="`catalogWorkspaceBinding` Submodule" id="@cdktf/provider-databricks.catalogWorkspaceBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogWorkspaceBinding <a name="CatalogWorkspaceBinding" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding databricks_catalog_workspace_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.catalog_workspace_binding.CatalogWorkspaceBinding;

CatalogWorkspaceBinding.Builder.create(Construct scope, java.lang.String id)
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
    .workspaceId(java.lang.Number)
//  .bindingType(java.lang.String)
//  .catalogName(java.lang.String)
//  .id(java.lang.String)
//  .securableName(java.lang.String)
//  .securableType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.bindingType">bindingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#binding_type CatalogWorkspaceBinding#binding_type}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#catalog_name CatalogWorkspaceBinding#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#id CatalogWorkspaceBinding#id}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.securableName">securableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#securable_name CatalogWorkspaceBinding#securable_name}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.securableType">securableType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#securable_type CatalogWorkspaceBinding#securable_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}.

---

##### `bindingType`<sup>Optional</sup> <a name="bindingType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.bindingType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#binding_type CatalogWorkspaceBinding#binding_type}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.catalogName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#catalog_name CatalogWorkspaceBinding#catalog_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#id CatalogWorkspaceBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securableName`<sup>Optional</sup> <a name="securableName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.securableName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#securable_name CatalogWorkspaceBinding#securable_name}.

---

##### `securableType`<sup>Optional</sup> <a name="securableType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.securableType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#securable_type CatalogWorkspaceBinding#securable_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetBindingType">resetBindingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableName">resetSecurableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableType">resetSecurableType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBindingType` <a name="resetBindingType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetBindingType"></a>

```java
public void resetBindingType()
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetId"></a>

```java
public void resetId()
```

##### `resetSecurableName` <a name="resetSecurableName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableName"></a>

```java
public void resetSecurableName()
```

##### `resetSecurableType` <a name="resetSecurableType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableType"></a>

```java
public void resetSecurableType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CatalogWorkspaceBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.catalog_workspace_binding.CatalogWorkspaceBinding;

CatalogWorkspaceBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.catalog_workspace_binding.CatalogWorkspaceBinding;

CatalogWorkspaceBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.catalog_workspace_binding.CatalogWorkspaceBinding;

CatalogWorkspaceBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.catalog_workspace_binding.CatalogWorkspaceBinding;

CatalogWorkspaceBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CatalogWorkspaceBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CatalogWorkspaceBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CatalogWorkspaceBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CatalogWorkspaceBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CatalogWorkspaceBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingTypeInput">bindingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableNameInput">securableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableTypeInput">securableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingType">bindingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableName">securableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableType">securableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bindingTypeInput`<sup>Optional</sup> <a name="bindingTypeInput" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingTypeInput"></a>

```java
public java.lang.String getBindingTypeInput();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `securableNameInput`<sup>Optional</sup> <a name="securableNameInput" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableNameInput"></a>

```java
public java.lang.String getSecurableNameInput();
```

- *Type:* java.lang.String

---

##### `securableTypeInput`<sup>Optional</sup> <a name="securableTypeInput" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableTypeInput"></a>

```java
public java.lang.String getSecurableTypeInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceIdInput"></a>

```java
public java.lang.Number getWorkspaceIdInput();
```

- *Type:* java.lang.Number

---

##### `bindingType`<sup>Required</sup> <a name="bindingType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingType"></a>

```java
public java.lang.String getBindingType();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `securableName`<sup>Required</sup> <a name="securableName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableName"></a>

```java
public java.lang.String getSecurableName();
```

- *Type:* java.lang.String

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableType"></a>

```java
public java.lang.String getSecurableType();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceId"></a>

```java
public java.lang.Number getWorkspaceId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogWorkspaceBindingConfig <a name="CatalogWorkspaceBindingConfig" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.catalog_workspace_binding.CatalogWorkspaceBindingConfig;

CatalogWorkspaceBindingConfig.builder()
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
    .workspaceId(java.lang.Number)
//  .bindingType(java.lang.String)
//  .catalogName(java.lang.String)
//  .id(java.lang.String)
//  .securableName(java.lang.String)
//  .securableType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.bindingType">bindingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#binding_type CatalogWorkspaceBinding#binding_type}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#catalog_name CatalogWorkspaceBinding#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#id CatalogWorkspaceBinding#id}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableName">securableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#securable_name CatalogWorkspaceBinding#securable_name}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableType">securableType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#securable_type CatalogWorkspaceBinding#securable_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.workspaceId"></a>

```java
public java.lang.Number getWorkspaceId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}.

---

##### `bindingType`<sup>Optional</sup> <a name="bindingType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.bindingType"></a>

```java
public java.lang.String getBindingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#binding_type CatalogWorkspaceBinding#binding_type}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#catalog_name CatalogWorkspaceBinding#catalog_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#id CatalogWorkspaceBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securableName`<sup>Optional</sup> <a name="securableName" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableName"></a>

```java
public java.lang.String getSecurableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#securable_name CatalogWorkspaceBinding#securable_name}.

---

##### `securableType`<sup>Optional</sup> <a name="securableType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableType"></a>

```java
public java.lang.String getSecurableType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/catalog_workspace_binding#securable_type CatalogWorkspaceBinding#securable_type}.

---



